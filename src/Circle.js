import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const Circle = (color, frameNum) => { // frameNum and others are passed to tell the Circle which frame to render, and how to get the next frame
    let ref = useRef();
    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');
        
        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);
        
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        let requestId, i = 0;

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            
            
            
            
            
            
            // replace this with animation code.
            context.arc(
                canvas.width / 2,
                canvas.height / 2,
                (canvas.width / 2) * Math.abs(Math.cos(i)),
                0,
                2 * Math.PI
            );
            context.fillStyle=color.children;
            context.fill();
            i += 0.05;
         
         
         
         
         
         
         
         
         
         
            requestId = requestAnimationFrame(render);
        };

        render();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });
    
    return (
        <canvas
            ref={ref} 
            style={{ width: '400px', height: '400px'}}
        />
    );
};

export default Circle;
