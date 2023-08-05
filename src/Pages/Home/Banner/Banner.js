import React from 'react';
import { motion } from "framer-motion"
import { FaDownload, FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import '../Banner/banner.css'

const Banner = () => {

    return (

        <div id='top' className='flex mb-10 justify-around items-center flex-col-reverse lg:flex-row gap-5 text-gray-100 relative lg:pt-32'>


            <div className='mb-10 lg:mb-0'>

                <div className='hidden lg:block' >
                    <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: .2 }} className='border top-0 left-20 absolute w-32 h-32 rounded-full border-gray-600'></motion.div>
                    <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: .4 }} className='border top-0 left-40 absolute w-32 h-32 rounded-full border-gray-600'></motion.div>
                    <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: .6 }} className='border top-0 left-60 absolute w-32 h-32 rounded-full border-gray-600'></motion.div>
                    <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: .8 }} className='border top-0 left-80 absolute w-32 h-32 rounded-full  border-gray-600'></motion.div>
                </div>


                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0, }}
                    transition={{ type: 'spring', stiffness: 80 }}
                >
                    <h1 className='text-5xl font-semibold'>Hello, I'm</h1>
                    <h1 className='text-7xl font-semibold my-5 flex items-center gap-3'>
                        <svg id='svgName' className=' h-[28px] w-[108px] lg:h-[57px] lg:w-[216px]' viewBox="0 0 216 57" fill="none">

                            <path

                                className='stroke-gray-100 stroke-2'
                                d="M15.64 56.296C12.616 56.296 9.952 55.768 7.648 54.712C5.344 53.656 3.568 52.192 2.32 50.32C1.072 48.4 0.448 46.192 0.448 43.696C0.448 41.584 0.88 39.664 1.744 37.936C2.656 36.208 3.856 34.84 5.344 33.832C6.88 32.824 8.56 32.32 10.384 32.32C12.064 32.32 13.48 32.752 14.632 33.616C15.784 34.432 16.504 35.584 16.792 37.072C14.296 37.072 12.304 37.744 10.816 39.088C9.328 40.384 8.584 42.16 8.584 44.416C8.584 46.48 9.208 48.136 10.456 49.384C11.704 50.632 13.36 51.256 15.424 51.256C17.968 51.256 20.056 50.416 21.688 48.736C23.368 47.008 24.208 44.848 24.208 42.256C24.208 40 23.584 37.864 22.336 35.848C21.088 33.832 19.216 31.384 16.72 28.504C14.128 25.528 12.16 22.984 10.816 20.872C9.52 18.712 8.872 16.36 8.872 13.816C8.872 11.32 9.568 9.088 10.96 7.12C12.352 5.104 14.272 3.52 16.72 2.368C19.168 1.216 21.928 0.639996 25 0.639996C28.888 0.639996 31.984 1.552 34.288 3.376C36.64 5.2 37.816 7.648 37.816 10.72C37.816 12.736 37.312 14.368 36.304 15.616C35.296 16.864 33.976 17.488 32.344 17.488C30.52 17.488 29.056 16.744 27.952 15.256C28.864 14.584 29.584 13.696 30.112 12.592C30.64 11.488 30.904 10.336 30.904 9.136C30.904 7.6 30.448 6.376 29.536 5.464C28.624 4.552 27.376 4.096 25.792 4.096C23.872 4.096 22.288 4.792 21.04 6.184C19.84 7.528 19.24 9.256 19.24 11.368C19.24 13.288 19.792 15.088 20.896 16.768C22 18.4 23.728 20.512 26.08 23.104C28 25.168 29.536 26.944 30.688 28.432C31.888 29.92 32.896 31.648 33.712 33.616C34.576 35.536 35.008 37.624 35.008 39.88C35.008 42.952 34.144 45.736 32.416 48.232C30.736 50.728 28.408 52.696 25.432 54.136C22.504 55.576 19.24 56.296 15.64 56.296ZM47.7025 55.432C44.9665 55.432 42.6865 54.496 40.8625 52.624C39.0385 50.752 38.1265 47.824 38.1265 43.84C38.1265 40.288 38.8225 36.568 40.2145 32.68C41.6545 28.744 43.7665 25.432 46.5505 22.744C49.3825 20.008 52.7425 18.64 56.6305 18.64C58.5985 18.64 60.0625 18.976 61.0225 19.648C61.9825 20.32 62.4625 21.208 62.4625 22.312V22.816L63.2545 19H73.6225L68.4385 43.48C68.2465 44.2 68.1505 44.968 68.1505 45.784C68.1505 47.848 69.1345 48.88 71.1025 48.88C72.4465 48.88 73.5985 48.256 74.5585 47.008C75.5665 45.76 76.3585 44.128 76.9345 42.112H79.9585C78.1825 47.296 75.9745 50.824 73.3345 52.696C70.7425 54.52 68.1265 55.432 65.4865 55.432C63.4705 55.432 61.8385 54.88 60.5905 53.776C59.3905 52.624 58.6705 50.968 58.4305 48.808C57.0385 50.776 55.4785 52.384 53.7505 53.632C52.0705 54.832 50.0545 55.432 47.7025 55.432ZM52.3825 48.448C53.5825 48.448 54.7585 47.896 55.9105 46.792C57.1105 45.64 57.9265 44.08 58.3585 42.112L61.8145 25.84C61.8145 25.216 61.5745 24.616 61.0945 24.04C60.6145 23.416 59.8705 23.104 58.8625 23.104C56.9425 23.104 55.2145 24.232 53.6785 26.488C52.1425 28.696 50.9425 31.384 50.0785 34.552C49.2145 37.672 48.7825 40.432 48.7825 42.832C48.7825 45.232 49.1185 46.768 49.7905 47.44C50.5105 48.112 51.3745 48.448 52.3825 48.448ZM120.737 55.432C117.809 55.432 115.649 54.664 114.257 53.128C112.913 51.544 112.241 49.6 112.241 47.296C112.241 46.288 112.361 45.16 112.601 43.912C112.841 42.616 113.081 41.368 113.321 40.168C113.609 38.968 113.801 38.2 113.897 37.864C114.281 36.184 114.641 34.528 114.977 32.896C115.313 31.264 115.481 29.944 115.481 28.936C115.481 26.488 114.617 25.264 112.889 25.264C111.641 25.264 110.537 25.888 109.577 27.136C108.617 28.336 107.849 29.92 107.273 31.888L102.377 55H92.0089L97.2649 30.16C97.4089 29.584 97.4809 28.984 97.4809 28.36C97.4809 26.248 96.7609 25.192 95.3209 25.192C93.9769 25.192 92.8009 25.816 91.7929 27.064C90.8329 28.264 90.0649 29.872 89.4889 31.888L84.5929 55H74.2249L81.8569 19H92.2249L91.4329 22.744C93.8809 20.008 96.8089 18.64 100.217 18.64C104.441 18.64 106.913 20.704 107.633 24.832C110.273 20.752 113.609 18.712 117.641 18.712C120.089 18.712 122.033 19.384 123.473 20.728C124.913 22.072 125.633 24.112 125.633 26.848C125.633 28.24 125.465 29.8 125.129 31.528C124.793 33.208 124.313 35.272 123.689 37.72C123.305 39.208 122.945 40.672 122.609 42.112C122.321 43.504 122.177 44.608 122.177 45.424C122.177 46.384 122.393 47.128 122.825 47.656C123.257 48.184 124.001 48.448 125.057 48.448C126.497 48.448 127.649 47.944 128.513 46.936C129.377 45.88 130.241 44.272 131.105 42.112H134.129C132.353 47.392 130.289 50.944 127.937 52.768C125.633 54.544 123.233 55.432 120.737 55.432ZM135.998 19H146.366L145.43 23.464C147.062 22.024 148.526 20.92 149.822 20.152C151.166 19.384 152.606 19 154.142 19C155.678 19 156.878 19.528 157.742 20.584C158.654 21.64 159.11 22.912 159.11 24.4C159.11 25.792 158.654 27.016 157.742 28.072C156.83 29.128 155.558 29.656 153.926 29.656C152.87 29.656 152.15 29.416 151.766 28.936C151.43 28.408 151.166 27.664 150.974 26.704C150.83 26.08 150.686 25.624 150.542 25.336C150.398 25.048 150.134 24.904 149.75 24.904C148.742 24.904 147.878 25.12 147.158 25.552C146.486 25.936 145.598 26.632 144.494 27.64L138.734 55H128.366L135.998 19ZM166.812 55.432C164.076 55.432 161.796 54.496 159.972 52.624C158.148 50.752 157.236 47.824 157.236 43.84C157.236 40.288 157.932 36.568 159.324 32.68C160.764 28.744 162.876 25.432 165.66 22.744C168.492 20.008 171.852 18.64 175.74 18.64C177.708 18.64 179.172 18.976 180.132 19.648C181.092 20.32 181.572 21.208 181.572 22.312V22.816L182.364 19H192.732L187.548 43.48C187.356 44.2 187.26 44.968 187.26 45.784C187.26 47.848 188.244 48.88 190.212 48.88C191.556 48.88 192.708 48.256 193.668 47.008C194.676 45.76 195.468 44.128 196.044 42.112H199.068C197.292 47.296 195.084 50.824 192.444 52.696C189.852 54.52 187.236 55.432 184.596 55.432C182.58 55.432 180.948 54.88 179.7 53.776C178.5 52.624 177.78 50.968 177.54 48.808C176.148 50.776 174.588 52.384 172.86 53.632C171.18 54.832 169.164 55.432 166.812 55.432ZM171.492 48.448C172.692 48.448 173.868 47.896 175.02 46.792C176.22 45.64 177.036 44.08 177.468 42.112L180.924 25.84C180.924 25.216 180.684 24.616 180.204 24.04C179.724 23.416 178.98 23.104 177.972 23.104C176.052 23.104 174.324 24.232 172.788 26.488C171.252 28.696 170.052 31.384 169.188 34.552C168.324 37.672 167.892 40.432 167.892 42.832C167.892 45.232 168.228 46.768 168.9 47.44C169.62 48.112 170.484 48.448 171.492 48.448ZM202.838 55.432C200.39 55.432 198.566 54.688 197.366 53.2C196.214 51.712 195.638 49.744 195.638 47.296C195.638 46.048 195.782 44.776 196.07 43.48L200.678 21.88H198.302L198.878 19H201.254L203.414 9.064L214.07 7.624C213.638 9.448 213.398 10.528 213.35 10.864C213.014 12.208 212.438 14.92 211.622 19H215.942L215.366 21.88H211.046L206.438 43.48C206.198 44.536 206.078 45.376 206.078 46C206.078 47.728 206.918 48.592 208.598 48.592C209.462 48.592 210.086 48.52 210.47 48.376C209.51 51.16 208.382 53.032 207.086 53.992C205.79 54.952 204.374 55.432 202.838 55.432Z"
                            />
                        </svg>

                        <svg id='svgLastName' className='h-[36px] w-[122px] lg:h-[72px] lg:w-[245px]' viewBox="0 0 245 72" fill="none">
                            <path

                                className='stroke-white stroke-2'
                                d="M10.88 68.904C7.472 68.904 4.832 67.968 2.96 66.096C1.136 64.272 0.224 61.824 0.224 58.752C0.224 56.16 1.016 53.904 2.6 51.984C4.184 50.064 6.32 49.104 9.008 49.104C11.072 49.104 12.752 49.416 14.048 50.04C15.392 50.616 16.064 51.912 16.064 53.928C16.064 54.792 15.92 55.752 15.632 56.808C14.768 56.088 14.024 55.584 13.4 55.296C12.776 55.056 12.08 54.936 11.312 54.936C9.728 54.936 8.48 55.464 7.568 56.52C6.704 57.576 6.272 58.824 6.272 60.264C6.272 61.944 6.776 63.192 7.784 64.008C8.792 64.872 9.92 65.304 11.168 65.304C12.32 65.304 13.28 65.064 14.048 64.584C14.864 64.152 15.584 63.288 16.208 61.992C16.832 60.744 17.432 58.896 18.008 56.448L29.312 5.04C26.096 6.336 23.6 8.328 21.824 11.016C20.048 13.704 19.16 16.968 19.16 20.808C19.16 22.584 19.328 23.832 19.664 24.552C20 25.224 20.168 25.608 20.168 25.704C17.576 25.704 15.632 25.176 14.336 24.12C13.088 23.016 12.464 21.216 12.464 18.72C12.464 15.648 13.712 12.672 16.208 9.792C18.752 6.864 21.992 4.512 25.928 2.736C29.864 0.911997 33.8 -4.29153e-06 37.736 -4.29153e-06H40.616L29.816 51.12C28.568 57.024 26.504 61.464 23.624 64.44C20.744 67.416 16.496 68.904 10.88 68.904ZM48.1136 54.288C44.5616 54.288 41.7536 53.376 39.6896 51.552C37.6256 49.728 36.5936 46.848 36.5936 42.912C36.5936 39.648 37.2656 36.024 38.6096 32.04C39.9536 28.056 42.1136 24.624 45.0896 21.744C48.0656 18.816 51.8096 17.352 56.3216 17.352C62.4656 17.352 65.5376 21.192 65.5376 28.872V28.944C65.6816 28.992 65.9456 29.016 66.3296 29.016C67.9136 29.016 69.7376 28.608 71.8016 27.792C73.8656 26.928 75.7376 25.896 77.4176 24.696L78.0656 26.64C76.6736 28.128 74.8496 29.4 72.5936 30.456C70.3856 31.464 67.9616 32.184 65.3216 32.616C64.9376 36.984 63.9536 40.8 62.3696 44.064C60.7856 47.328 58.7456 49.848 56.2496 51.624C53.7536 53.4 51.0416 54.288 48.1136 54.288ZM50.9936 47.808C52.1456 47.808 53.2976 47.16 54.4496 45.864C55.6016 44.52 56.6096 42.72 57.4736 40.464C58.3376 38.16 58.9616 35.616 59.3456 32.832C58.0496 32.544 57.4016 31.536 57.4016 29.808C57.4016 27.84 58.1456 26.544 59.6336 25.92C59.5376 24.336 59.2976 23.256 58.9136 22.68C58.5296 22.056 57.8576 21.744 56.8976 21.744C55.3136 21.744 53.7776 22.896 52.2896 25.2C50.8016 27.504 49.6016 30.264 48.6896 33.48C47.7776 36.696 47.3216 39.528 47.3216 41.976C47.3216 44.28 47.5856 45.84 48.1136 46.656C48.6416 47.424 49.6016 47.808 50.9936 47.808ZM80.4742 72C78.1702 72 76.2502 71.4 74.7142 70.2C73.1782 69 72.4102 67.272 72.4102 65.016C72.4102 62.28 73.5142 60.072 75.7222 58.392C77.9302 56.76 80.7382 55.392 84.1462 54.288L85.0102 50.4C83.6182 51.936 82.2022 52.992 80.7622 53.568C79.3222 54.144 77.8582 54.432 76.3702 54.432C74.0662 54.432 72.1942 53.712 70.7542 52.272C69.3622 50.832 68.6662 48.672 68.6662 45.792C68.6662 44.592 68.8582 43.032 69.2422 41.112L74.1382 18H84.5062L79.3222 42.48C79.1782 43.056 79.1062 43.656 79.1062 44.28C79.1062 46.392 79.8262 47.448 81.2662 47.448C82.5142 47.448 83.6182 46.92 84.5782 45.864C85.5382 44.76 86.3062 43.32 86.8822 41.544L91.9222 18H102.29L95.1622 51.408C97.4662 50.64 99.3142 49.488 100.706 47.952C102.098 46.416 103.274 44.136 104.234 41.112H107.258C105.962 45.384 104.21 48.528 102.002 50.544C99.7942 52.512 97.2982 53.856 94.5142 54.576L93.4342 59.76C92.4742 64.416 90.8182 67.608 88.4662 69.336C86.1142 71.112 83.4502 72 80.4742 72ZM78.8182 66.384C79.6342 66.384 80.4262 65.832 81.1942 64.728C81.9622 63.624 82.5622 62.04 82.9942 59.976L83.4262 57.888C78.7222 59.616 76.3702 61.656 76.3702 64.008C76.3702 64.632 76.5862 65.184 77.0182 65.664C77.4502 66.144 78.0502 66.384 78.8182 66.384ZM112.898 54.432C110.162 54.432 107.882 53.496 106.058 51.624C104.234 49.752 103.322 46.824 103.322 42.84C103.322 39.288 104.018 35.568 105.41 31.68C106.85 27.744 108.962 24.432 111.746 21.744C114.578 19.008 117.938 17.64 121.826 17.64C123.794 17.64 125.258 17.976 126.218 18.648C127.178 19.32 127.658 20.208 127.658 21.312V21.6L131.186 5.04L141.842 3.6L133.562 42.48C133.37 43.2 133.274 43.968 133.274 44.784C133.274 45.744 133.49 46.44 133.922 46.872C134.402 47.256 135.17 47.448 136.226 47.448C137.57 47.448 138.722 46.872 139.682 45.72C140.69 44.568 141.482 43.032 142.058 41.112H145.082C142.154 49.704 137.33 54 130.61 54C128.642 54 127.034 53.472 125.786 52.416C124.586 51.36 123.842 49.824 123.554 47.808C122.306 49.728 120.794 51.312 119.018 52.56C117.29 53.808 115.25 54.432 112.898 54.432ZM117.578 47.448C118.73 47.448 119.882 46.92 121.034 45.864C122.234 44.808 123.05 43.344 123.482 41.472V41.112L127.01 24.624C126.578 22.944 125.594 22.104 124.058 22.104C122.138 22.104 120.41 23.232 118.874 25.488C117.338 27.696 116.138 30.384 115.274 33.552C114.41 36.672 113.978 39.432 113.978 41.832C113.978 44.232 114.314 45.768 114.986 46.44C115.706 47.112 116.57 47.448 117.578 47.448ZM168.078 54.432C165.15 54.432 162.99 53.664 161.598 52.128C160.254 50.544 159.582 48.6 159.582 46.296C159.582 45.288 159.702 44.16 159.942 42.912C160.182 41.616 160.422 40.368 160.662 39.168C160.95 37.968 161.142 37.2 161.238 36.864C161.622 35.184 161.982 33.528 162.318 31.896C162.654 30.264 162.822 28.944 162.822 27.936C162.822 25.488 161.958 24.264 160.23 24.264C158.982 24.264 157.878 24.888 156.918 26.136C155.958 27.336 155.19 28.92 154.614 30.888L149.718 54H139.35L149.79 5.04L160.446 3.6L156.558 21.744C158.958 19.056 161.766 17.712 164.982 17.712C167.43 17.712 169.374 18.384 170.814 19.728C172.254 21.072 172.974 23.112 172.974 25.848C172.974 27.24 172.806 28.8 172.47 30.528C172.134 32.208 171.654 34.272 171.03 36.72C170.646 38.208 170.286 39.672 169.95 41.112C169.662 42.504 169.518 43.608 169.518 44.424C169.518 45.384 169.734 46.128 170.166 46.656C170.598 47.184 171.342 47.448 172.398 47.448C173.838 47.448 174.99 46.944 175.854 45.936C176.718 44.88 177.582 43.272 178.446 41.112H181.47C179.694 46.392 177.63 49.944 175.278 51.768C172.974 53.544 170.574 54.432 168.078 54.432ZM187.078 54.432C184.342 54.432 182.062 53.496 180.238 51.624C178.413 49.752 177.501 46.824 177.501 42.84C177.501 39.288 178.198 35.568 179.59 31.68C181.03 27.744 183.142 24.432 185.926 21.744C188.758 19.008 192.118 17.64 196.006 17.64C197.974 17.64 199.438 17.976 200.398 18.648C201.358 19.32 201.838 20.208 201.838 21.312V21.816L202.63 18H212.998L207.814 42.48C207.622 43.2 207.526 43.968 207.526 44.784C207.526 46.848 208.51 47.88 210.478 47.88C211.822 47.88 212.974 47.256 213.934 46.008C214.942 44.76 215.734 43.128 216.31 41.112H219.334C217.558 46.296 215.35 49.824 212.71 51.696C210.118 53.52 207.502 54.432 204.862 54.432C202.846 54.432 201.214 53.88 199.966 52.776C198.766 51.624 198.046 49.968 197.806 47.808C196.414 49.776 194.854 51.384 193.126 52.632C191.446 53.832 189.43 54.432 187.078 54.432ZM191.758 47.448C192.958 47.448 194.134 46.896 195.286 45.792C196.486 44.64 197.302 43.08 197.734 41.112L201.19 24.84C201.19 24.216 200.95 23.616 200.47 23.04C199.99 22.416 199.246 22.104 198.238 22.104C196.318 22.104 194.59 23.232 193.054 25.488C191.518 27.696 190.318 30.384 189.454 33.552C188.59 36.672 188.158 39.432 188.158 41.832C188.158 44.232 188.494 45.768 189.166 46.44C189.886 47.112 190.75 47.448 191.758 47.448ZM221.232 18H231.6L230.664 22.464C232.296 21.024 233.76 19.92 235.056 19.152C236.4 18.384 237.84 18 239.376 18C240.912 18 242.112 18.528 242.976 19.584C243.888 20.64 244.344 21.912 244.344 23.4C244.344 24.792 243.888 26.016 242.976 27.072C242.064 28.128 240.792 28.656 239.16 28.656C238.104 28.656 237.384 28.416 237 27.936C236.664 27.408 236.4 26.664 236.208 25.704C236.064 25.08 235.92 24.624 235.776 24.336C235.632 24.048 235.368 23.904 234.984 23.904C233.976 23.904 233.112 24.12 232.392 24.552C231.72 24.936 230.832 25.632 229.728 26.64L223.968 54H213.6L221.232 18Z"
                            />
                        </svg>



                    </h1>
                    <p className='text-2xl font-semibold'>I'm A Web Developer</p>


                    <a href="https://drive.google.com/uc?export=download&id=1GIIKkG_CsMT4PK7pXOOS-O0k8KSvE14O" download="resume of samrat joydhar.pdf"> <button className='btn btn-outline text-gray-100 hover:bg-gray-600 my-5'>Download Resume <FaDownload className='ml-2'></FaDownload></button></a>



                    <div className='flex gap-5'>
                        <motion.a target="_blank" href='https://www.facebook.com/vincent.samrat.5/' whileHover={{ scale: 1.3 }} className='p-3 border h-12 w-12 text-gray-400 border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500'>
                            <FaFacebookSquare className=' text-2xl'></FaFacebookSquare>
                        </motion.a>
                        <motion.a target="_blank" href='https://www.linkedin.com/in/samrat-joydhar/' whileHover={{ scale: 1.3 }} className='p-3 border h-12 w-12 text-gray-400 border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500'>
                            <FaLinkedin className=' text-2xl'></FaLinkedin>
                        </motion.a>
                        <motion.a target="_blank" href='https://github.com/joydharsamrat' whileHover={{ scale: 1.3 }} className='p-3 border h-12 w-12 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500 hover:text-blue-500'>
                            <FaGithubSquare className=' text-2xl'></FaGithubSquare>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <div>

                <motion.div
                    className='lg:w-96 lg:h-96 border rounded-full border-gray-600 flex  justify-center items-center'>
                    <motion.div
                        drag
                        dragConstraints={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 1 } }}
                        className='rounded-full w-80 cursor-grab bg-gray-600'>
                        <img className='rounded-full pointer-events-none' src="https://i.ibb.co/PrVVm0X/Samrat.png" alt="" />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    );
};

export default Banner;