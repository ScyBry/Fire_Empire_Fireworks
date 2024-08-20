import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  phone: z.string().min(10, "Номер телефона должен содержать не менее 10 цифр"),
  email: z.string().email("Неверный адрес электронной почты"),
  message: z.string().min(1, "Сообщение обязательно"),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID!;

  const onSubmit = (data: any) => {
    const template = {
      name: data.name,
      phone_number: data.phone,
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
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Имя</label>
        <input id="name" {...register("name")} />
        {errors.name && (
          <p className={styles.error}>{String(errors.name.message)}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Номер телефона</label>
        <input id="phone" {...register("phone")} />
        {errors.phone && (
          <p className={styles.error}>{String(errors.phone.message)}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} />
        {errors.email && (
          <p className={styles.error}>{String(errors.email.message)}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Сообщение</label>
        <textarea id="message" {...register("message")} />
        {errors.message && (
          <p className={styles.error}>{String(errors.message.message)}</p>
        )}
      </div>

      <Button disabled={!isValid} type="submit">
        Отправить
      </Button>
    </form>
  );
};
