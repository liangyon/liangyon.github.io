"use client";

import { portfolioData, type ExperienceItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar } from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    type Variants,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const BentoCard = ({ item }: { item: ExperienceItem }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [2, -2]);
    const rotateY = useTransform(x, [-100, 100], [-2, 2]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 100);
        y.set(yPct * 100);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const getGridClass = () => {
        if (item.size === "lg") {
            return "md:col-span-2 md:row-span-2";
        }
        if (item.size === "md") {
            return "md:col-span-2 md:row-span-1";
        }
        return "md:col-span-1 md:row-span-1";
    };

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("h-full", getGridClass())}
            onHoverEnd={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <Link
                href={item.link || "#"}
                target={item.link?.startsWith("http") ? "_blank" : undefined}
                rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`
                    group relative flex flex-col gap-4 h-full rounded-xl p-6
                    bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30 
                    dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/30
                    border border-neutral-200/60 dark:border-neutral-800/60
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-transparent 
                    dark:before:from-black/10 dark:before:via-black/20 dark:before:to-transparent
                    before:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:rounded-xl after:bg-neutral-50/70 dark:after:bg-neutral-900/70 after:z-[-1]
                    backdrop-blur-[4px]
                    shadow-[0_4px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]
                    hover:border-neutral-300/50 dark:hover:border-neutral-700/50
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                    hover:backdrop-blur-[6px]
                    hover:bg-gradient-to-b hover:from-neutral-50/60 hover:via-neutral-50/30 hover:to-neutral-50/20
                    dark:hover:from-neutral-800/60 dark:hover:via-neutral-800/30 dark:hover:to-neutral-800/20
                    transition-all duration-500 ease-out
                `}
                tabIndex={0}
                aria-label={`${item.title} at ${item.company}`}
            >
                <div
                    className="relative z-10 flex flex-col gap-4 h-full"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="space-y-4 flex-1 flex flex-col">
                        {/* Header with Icon and Arrow */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center p-2 border border-neutral-200 dark:border-neutral-700">
                                <Image
                                    src={item.companyIcon}
                                    alt={`${item.company} logo`}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                                    {item.company}
                                </p>
                            </div>
                            <div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex-shrink-0">
                                <ArrowUpRight className="h-5 w-5" />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                        </div>

                        {/* Overview */}
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight leading-relaxed">
                            {item.overview}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function ExperienceBentoGrid() {
    const experiences = portfolioData.experience.content;

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        {portfolioData.experience.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-3 text-lg">
                        A Software Developer with Full Stack and Web Dev proficiency
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-6 auto-rows-[minmax(200px,auto)]"
                >
                    {experiences.map((experience, index) => (
                        <BentoCard key={`${experience.company}-${experience.date}-${index}`} item={experience} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
