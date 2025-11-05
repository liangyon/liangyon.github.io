"use client";

import { portfolioData, techIconMap, type ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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

const SpotlightFeature = ({ items }: { items: string[] }) => {
    return (
        <ul className="mt-4 space-y-2">
            {items.map((item, index) => (
                <motion.li
                    key={`spotlight-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
                >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {item}
                    </span>
                </motion.li>
            ))}
        </ul>
    );
};

const MetricsFeature = ({
    metrics,
}: {
    metrics: Array<{
        label: string;
        value: number;
        suffix?: string;
        color?: string;
    }>;
}) => {
    const getColorClass = (color = "emerald") => {
        const colors = {
            emerald: "bg-emerald-500 dark:bg-emerald-400",
            blue: "bg-blue-500 dark:bg-blue-400",
            violet: "bg-violet-500 dark:bg-violet-400",
            amber: "bg-amber-500 dark:bg-amber-400",
            rose: "bg-rose-500 dark:bg-rose-400",
        };
        return colors[color as keyof typeof colors] || colors.emerald;
    };

    return (
        <div className="mt-4 space-y-3">
            {metrics.map((metric, index) => (
                <motion.div
                    key={`metric-${metric.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    className="space-y-1.5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index }}
                >
                    <div className="flex justify-between items-center text-sm">
                        <div className="text-neutral-700 dark:text-neutral-300 font-medium">
                            {metric.label}
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-300 font-semibold">
                            {metric.value}
                            {metric.suffix}
                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full rounded-full ${getColorClass(
                                metric.color
                            )}`}
                            initial={{ width: 0 }}
                            animate={{
                                width: `${Math.min(100, metric.value)}%`,
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.15 * index,
                            }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const BentoCard = ({ item }: { item: ProjectItem }) => {
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
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
                aria-label={`${item.title} - ${item.description}`}
            >
                <div
                    className="relative z-10 flex flex-col gap-3 h-full"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="space-y-3 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex-shrink-0">
                                <ArrowUpRight className="h-5 w-5" />
                            </div>
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
                            {item.description}
                        </p>

                        {/* Feature specific content */}
                        {item.feature === "spotlight" &&
                            item.spotlightItems && (
                                <SpotlightFeature items={item.spotlightItems} />
                            )}

                        {item.feature === "metrics" && item.metrics && (
                            <MetricsFeature metrics={item.metrics} />
                        )}

                        {/* Tech Stack */}
                        <div className="mt-auto pt-4 flex items-center flex-wrap gap-3 border-t border-neutral-200/70 dark:border-neutral-800/70">
                            {item.techStack.slice(0, item.size === 'lg' ? 5 : item.size === 'md' ? 4 : 3).map((tech: string) => (
                                <div
                                    key={tech}
                                    className="relative group/icon"
                                    title={tech}
                                >
                                    <Image
                                        src={techIconMap[tech] || ""}
                                        alt={tech}
                                        width={20}
                                        height={20}
                                        className="opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                            {item.techStack.length > (item.size === 'lg' ? 5 : item.size === 'md' ? 4 : 3) && (
                                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                    +{item.techStack.length - (item.size === 'lg' ? 5 : item.size === 'md' ? 4 : 3)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function ProjectsBentoGrid() {
    const projects = portfolioData.projects.content;

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
                        {portfolioData.projects.title}
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]"
                >
                    {projects.map((project, index) => (
                        <BentoCard key={`${project.title}-${index}-${project.link}`} item={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
