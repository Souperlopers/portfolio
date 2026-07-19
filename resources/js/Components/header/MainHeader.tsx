import { useState       , useEffect                                 } from "react"             ;
import { motion         ,useScroll,useTransform,useMotionValueEvent,} from "framer-motion"     ;
import { NavigationItems                                            } from "@/types/navigation";

// style
const wrapperStyle   = "fixed z-50 w-full flex flex-col justify-start items-center"  ;
const containerStyle = "flex items-center h-[80px] w-full max-w-[1350px]" ;

const itemParentStyle  = "flex w-full  font-medium text-white gap-8 " ;
const scrolledStyle    = " justify-start gap-8 lg:pr-40 pr-24"        ;
const notScrolledStyle = " justify-center lg:gap-40"                  ;

const navItemStyle       = "relative py-2 transition-all duration-200 focus-visible:outline-none text-white hover:text-white";
const activeNotItemStyle = "opacity-60 hover:opacity-90"                                                                     ;

const underLineStyle = "absolute bottom-0 left-0 right-0 h-[2px] bg-primary";

const MainHeader = ({navigationList}:{navigationList:NavigationItems[]}) => {
    const [activeSection, setActiveSection] = useState(navigationList[0].id || "");

    //scroll
    const scrollToSection = (item: NavigationItems) => {
        if (item.href) {
            window.location.href = item.href;
            return;
        }
        if (!item.id) return;
        const element = document.getElementById(item.id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    //observer for activate section
    useEffect(() => {
        const sections         = navigationList      .map((item)=>item.id) || [ ] ;
        const observers       :  IntersectionObserver[] = [ ]                     ;
              setActiveSection(  navigationList      [0]?.id || "")               ;

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px",
            threshold: 0,
        };

        sections.forEach((id) => {
            if (!id) return;
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            }, observerOptions);

            observer .observe(element );
            observers.push   (observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, [navigationList]);

    // check resize
    const [isMobiled, setIsMobiled] = useState(
        () => typeof window !== "undefined" && window.innerWidth < 600,
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobiled(window.innerWidth < 600);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animation
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const headerY      = useTransform(scrollY,[0, isMobiled ? 100 : 400],[isMobiled ? "140px" : "510px", isMobiled ? "0px"  : "0px" ],);
    const itemFontSize = useTransform(scrollY,[0, 100],[isMobiled ? "14px"  : "30px" , isMobiled ? "14px" : "18px"],);
    
    const headerBg = useTransform(
        scrollY,[0, isMobiled ? 100 : 200],
        ["linear-gradient(to top, rgba(51, 51, 51, 0), rgba(37, 37, 38, 0))",
        "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))",],
        );
   
    return (
        <motion.header
            style={{ y: headerY, background: headerBg  }}
            className={wrapperStyle}
        >
            <motion.div
                
                className={containerStyle}
            >
                <motion.div
                    className={`${itemParentStyle} ${isScrolled? scrolledStyle : notScrolledStyle} h-full`}
                >
                    {navigationList.map((item) => (
                        <motion.button
                            key={item.title}
                            style={{ fontSize: itemFontSize }}
                            onClick={() => scrollToSection(item)}
                            className={`${navItemStyle} ${activeSection != item.id && activeNotItemStyle}`}
                        >
                            <span>{item.title}</span>

                            {activeSection === item.id && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className={underLineStyle}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </motion.header>
    );
};

export default MainHeader;
