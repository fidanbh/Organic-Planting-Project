import React, {useState} from 'react'
import styles from './partners.styles.module.scss'

const Partners = () => {
    const data = [
        'https://i.hizliresim.com/ag7vut6.png',
        'https://i.hizliresim.com/7loxr3z.png',
        'https://i.hizliresim.com/gqzxli6.png',
        'https://i.hizliresim.com/ag7vut6.png',
        'https://i.hizliresim.com/7loxr3z.png',
        'https://i.hizliresim.com/gqzxli6.png',
    ]
    const [state, setState] = useState(data)
    
  return (
    <div className={styles.partners}>
        {
       state.map((item)=>(
        <div className={styles.partners_child}>
            <img src={item} className={styles.partnersImg}></img>
        </div>
       ))
        }
    </div>
  )
}

export default Partners