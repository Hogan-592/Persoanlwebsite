import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef() //get a reference from our form

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            //input relevant ID on your Emialjs account
            'contact_service',
            'contact_form',
            refForm.current,
            'P1M6jlCD6QTPoQJgA'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
          <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                      idx={15}
                    />
                </h1>
                <p>
                    I'm interetsed in full stack/front-end/back-end software engineering opportunities 
                    - especially ambitious or interseting projects. However, if you have other request or questions,
                    don't hesitate to contact me using below from.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}> 
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Hogan Luo,
                <br />
                New Zealand,
                <br />
                Auckland <br />
                <span>hoganluo1028@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[-36.848263384233675, 174.7621480810937]} zoom={13}> 
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-36.848263384233675, 174.7621480810937]} >
                        <Popup>I live here :) </Popup>
                    </Marker>
                </MapContainer>
            </div>
          </div>
          <Loader type="pacman" />
        </>
    )
}

export default Contact

