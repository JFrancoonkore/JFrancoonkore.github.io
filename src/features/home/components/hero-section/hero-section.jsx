import React from "react";
import { ReactDOM } from "react";
import Card from "../card/card";
import dcfLogo from "../../../../assets/dcf-logo.jpeg";
import mesLogo from "../../../../assets/MES-logo.png";
import mustadLogo from "../../../../assets/mustad-logo.png";
import abiLogo from "../../../../assets/AB-InBev-logo.jpg";

function Section() {
    const cardsData = [
        {
            imageUrl: mesLogo,
            title: "MES",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            link: "#",
        },
        {
            imageUrl: dcfLogo,
            title: "DCF Colombia",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            link: "#",
        },
        {
            imageUrl: dcfLogo,
            title: "DCF México",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            link: "#",
        },
        {
            imageUrl: mustadLogo,
            title: "Mustad",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            link: "#",
        },
        {
            imageUrl: abiLogo,
            title: "Análisis de supervivencia",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            link: "#",
        },
    ];

    return (
        <div className="my-8 mx-4 sm:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
}

export default Section;