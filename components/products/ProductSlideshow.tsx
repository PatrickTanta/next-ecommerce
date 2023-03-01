import { Slide } from 'react-slideshow-image'
import styles from './ProductSlideshow.module.css'
import 'react-slideshow-image/dist/styles.css'
import { FC } from 'react'

interface Props {
    images: string[]
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
    return (
        <Slide easing="ease" duration={7000} indicators>
            {images.map((image) => {
                return (
                    <div className={styles['each-slide']} key={image}>
                        <div
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </div>
                )
            })}
        </Slide>
    )
}
