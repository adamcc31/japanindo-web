"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
    label: string;
    href: string;
}

const pathLabels: Record<string, string> = {
    order: "Pemesanan",
};

export default function Breadcrumb() {
    const pathname = usePathname();

    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Beranda", href: "/" },
        ...pathSegments.map((segment, index) => ({
            label: pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
            href: "/" + pathSegments.slice(0, index + 1).join("/"),
        })),
    ];

    // JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `https://japanindotravel.id${item.href}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbItems.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            {index > 0 && (
                                <span className="material-icons-round text-gray-400 text-base mx-2">
                                    chevron_right
                                </span>
                            )}
                            {index === breadcrumbItems.length - 1 ? (
                                <span className="text-gray-500 dark:text-gray-400">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-primary hover:text-pink-700 transition font-medium"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
