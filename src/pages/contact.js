'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';

export default function ContactPage() {
    const form = useRef(null);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setIsSent(false);

        if (!form.current) return;

        emailjs
            .sendForm('service_wh9p54w', 'template_k0uuzgn', form.current, 'wMrxWyifG88Np--Kd')
            .then(() => {
                // 2. Auto-reply to user
                return emailjs.sendForm('service_wh9p54w', 'template_lqu03cy', form.current, 'wMrxWyifG88Np--Kd');
            })
            .then(
                () => {
                    setIsSent(true);
                    setIsLoading(false);
                    form.current?.reset();
                },
                (err) => {
                    setError('Failed to send message. Try again.');
                    setIsLoading(false);
                    console.error(err);
                }
            );
    };

    return ( 
        <><Head>
            <title> DM | Contact</title>
            <meta name="description" content="Contact Me." />
        </Head>
        <TransitionEffect />
        <div className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-6 text-center dark:text-light">Contact Me</h1>
                <p className="text-center mb-10 text-gray-600 dark:text-light">
                    Have a question, idea, or opportunity? Drop me a message!
                </p>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium dark:text-light">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full border px-4 py-2 rounded-lg focus:outline-none 
                             dark:bg-light/90 focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium dark:text-light">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='john.doe@gmail.com'
                            required
                            className="w-full border px-4 py-2 rounded-lg focus:outline-none 
                             dark:bg-light/90 focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium dark:text-light/90">Message</label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder="Write your message here..."
                            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                             dark:bg-light/90"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-dark text-white py-2 px-6 rounded-lg transition dark:bg-light dark:text-dark text-bold"
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                    {isSent && (
                        <p className="text-primary dark:text-primaryDark mt-4">Message sent successfully!</p>
                    )}
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                </form>
            </div></>
    );
}
