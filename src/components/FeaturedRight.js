const FeaturedRight = (props) => {
    const image = props.image;
    const icon = props.icon;
    const title = props.title;
    const content = props.content;

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-4 h-fit py-4">
            <div className="justify-start items-end hidden md:flex flex-col">
                <div className=" flex flex-col items-end pt-14 gap-4">
                    <div className="w-[70%] flex flex-col gap-4">
                    <img loading="lazy" src={icon} className="h-10 max-w-full w-fit " alt="Featured Section Icon" />
                    <h3 className="text-4xl w-[80%]">{title}</h3>
                    <p className="text-lg text-neutral-600 w-[90%]">{ content }</p>
                    </div>
                </div>
            </div>
            <div className="">
                <img loading="lazy" src={image} className="" alt="Featured" />
            </div>
            <div className="flex flex-col justify-start items-end md:hidden">
                <div className=" flex flex-col items-end gap-2">
                    <div className="w-full flex flex-col gap-4">
                    <img loading="lazy" src={icon} className="h-8 md:h-10 max-w-full w-fit " alt="Featured Section Icon" />
                    <h3 className="text-2xl md:text-4xl font-semibold w-full md:w-[80%]">{title}</h3>
                    <p className="text-sm md:text-lg text-neutral-600 w-full md:w-[90%]">{ content }</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default FeaturedRight;