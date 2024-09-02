import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const userId = import.meta.env.VITE_EMAILJS_USER_ID!;

const schema = z.object({
  name: z.string().min(1, { message: "Имя обязательно" }),
  phone_number: z.string().min(1, { message: "Некорректный номер телефона" }),
  email: z.string().email({ message: "Некорректный адрес электронной почты" }),
  message: z.string().min(1, { message: "Сообщение обязательно" }),
});

type FormData = z.infer<typeof schema>;

export const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    const template = {
      name: data.name,
      phone_number: data.phone_number,
      email: data.email,
      message: data.message,
      reply_to: data.email,
    };

    emailjs.send(serviceId, templateId, template, userId).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Ваше сообщение было успешно отправлено!");
        reset();
      },
      (error) => {
        console.log("Failed to send email.", error.text);
        alert(
          "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.",
        );
      },
    );
  };

  return (
    <motion.section
      className={styles.feedback_form}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.form__title}>
          <h2>Остались вопросы?</h2>
          <p>Оставьте свой телефон и мы перезвоним вам в ближайшее время!</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label htmlFor="name">Ваше имя:</label>
            <input id="name" {...register("name")} />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="name">Ваш номер телефона:</label>
            <input id="name" {...register("phone_number")} />
            {errors.phone_number && (
              <p className={styles.error}>{errors.phone_number.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Ваш e-mail:</label>
            <input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="question">Ваше сообщение:</label>
            <textarea id="question" {...register("message")} />
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}
          </div>

          <Button type="submit">ПОЗВОНИТЕ МНЕ</Button>
        </form>
      </div>
    </motion.section>
  );
};
