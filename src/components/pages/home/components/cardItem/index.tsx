"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { MapPin, MoveDiagonal, Bath, BedDouble } from "lucide-react";
import { Apartment } from "@/shared/types/apartmen";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import IconItem from "../../../../iconItem";
import { formatUAH } from "@/shared/utils/curency";

interface Props {
  apartment: Apartment;
  index: number;
}

const periodMap = {
  day: "в день",
  month: "в месяц",
};

const bedroomsMap: { [key: number]: string } = {
  1: "1 спальня",
  2: "2 спальни",
  3: "3 спальни",
  4: "4 спальни",
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

const CardItem = ({ apartment, index }: Props) => {
  // const t = useTranslations("HomePage");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { title, address, pricing, area, isCombinedBathroom, bedrooms } =
    apartment;

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      {/* {t("title")} */}
      <Link href={`/apartment/${apartment.id}`}>
        <Card className="p-0 overflow-auto group gap-0">
          <CardHeader className="p-0 h-48 flex justify-center relative">
            <Image
              src={apartment.img[0]}
              alt={title}
              fill
              className="w-full object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3>{title}</h3>
            <IconItem icon={MapPin} text={address} className="mb-[0.75rem]" />
            <div className="flex items-center gap-2">
              <IconItem icon={BedDouble} text={bedroomsMap[bedrooms]} />
              <IconItem
                icon={Bath}
                text={isCombinedBathroom ? "Совмещенный" : "Раздельный"}
              />
              <IconItem icon={MoveDiagonal} text={`${area} м²`} />
            </div>
          </CardContent>
          <CardFooter className="border-t border-t-slate-200 justify-between p-4!">
            <p className="font-bold text-amber-700">
              {formatUAH(pricing.price)}
            </p>
            <p className="text-neutral-400">{periodMap[pricing.period]}</p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CardItem;
