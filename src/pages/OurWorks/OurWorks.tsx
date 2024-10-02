import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import SearchIcon from '@mui/icons-material/Search'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import styles from './styles.module.sass'
import { PageTitle } from '../../components/PageTitle/PageTitle.tsx'
import { motion } from 'framer-motion'

export const gallery = import.meta.glob('./../../assets/fireworks/*', {
    eager: true,
    query: '?url',
    import: 'default',
})

const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export const OurWorks = () => {
    return (
        <section className={`${styles.ourWorks} container`}>
            <PageTitle title={'Наши работы'} />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                <LightGallery
                    mode="lg-fade"
                    pager={false}
                    thumbnail={true}
                    elementClassNames={styles.gallery}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {Object.entries(gallery).map(([image], index) => (
                        <motion.a
                            className={styles.galleryItem}
                            key={image}
                            href={image}
                            variants={item}
                        >
                            <img alt={`Firework ${index + 1}`} src={image} />
                            <div className={styles.searchIcon}>
                                <SearchIcon
                                    style={{ fontSize: '60px', color: '#fff' }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </LightGallery>
            </motion.div>
        </section>
    )
}
