'use client'

import React, { type FC, useRef } from 'react';
import { CardMediaProps } from '@mui/material';
import CardMediaRotatorView from "@/views/cardMediaRotator/CardMediaRotatorView";

type CardMediaRotatorProps = CardMediaProps & {
    alt?: string;
};
const CardMediaRotatorPresenter: FC<CardMediaRotatorProps> = (props) => {
    const containerRef  = useRef<HTMLDivElement>(null);
    const imageRef      = useRef<HTMLImageElement>(null);
    const lastOffset   = useRef(0);
    let frameId: number | null = null;

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (frameId !== null) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => {
            frameId = null;

            const container = containerRef.current;
            const image = imageRef.current;
            if (!container || !image) return;


            const cw = container.clientWidth;
            const percent = event.nativeEvent.offsetX / cw;
            const steppedPercent = Math.round(percent / 0.2) * 0.2;
            const iw = image.offsetWidth;
            const target = (iw - cw) * steppedPercent;
            const diff = Math.abs(lastOffset.current - target);
            const stepPx = iw * 0.1;

            if (diff >= stepPx) {
                image.style.transform = `translateX(${-target}px)`;
                lastOffset.current = target;
            }
        });
    }

    return <CardMediaRotatorView
        props={props}
        imageRef={imageRef}
        containerRef={containerRef}
        handleMouseMove={handleMouseMove}
        alt={props.alt}
    />;
};

export default CardMediaRotatorPresenter;