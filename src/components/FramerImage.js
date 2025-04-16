'use client'; // for Next.js 13+ with App Router (if needed)

import Image from 'next/image';
import { motion } from 'framer-motion';

// Create a motion-wrapped version of the Image component
const FramerImage = motion(Image);

export default FramerImage;
