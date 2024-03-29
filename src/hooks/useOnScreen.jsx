import React from "react";

function useOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
}

export default useOnScreen;