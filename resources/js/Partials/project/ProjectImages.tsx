import { ProjectImagesProps } from "@/types";

const ProjectImages = ({ images }:{images: ProjectImagesProps[]}) => {
    return (
        <div className="w-1/2 h-72 border border-neutral-700 rounded relative">
            {images.map((img) => (
                <img src={img.url} alt="" className="cover w-full h-full rounded"/>
            ))}
            <div className="absolute bottom-1 right-[40%] flex gap-5">
                <span className="border border-neutral-800">PREVIOUS</span>
                <span className="border border-neutral-800 px-3">NEXT</span>
            </div>
        </div>
    );
};

export default ProjectImages;
