const Featured = (props) => {
    const image = props.image;
    const icon = props.icon;
    const title = props.title;
    const content = props.content;

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-0 md:gap-4 h-fit py-4">
            <div className="h-full flex items-center">
                <img loading="lazy" src={image} className="" alt="Featured" />
            </div>
            <div className="flex flex-col justify-start">
                <div className=" flex flex-col pt-0 md:pt-12 gap-4">
                    <img loading="lazy" src={icon} className="h-8 md:h-10 max-w-full w-fit " alt="Featured Section Icon" />
                    <h3 className="text-2xl md:text-4xl font-semibold w-full md:w-[50%]">{title}</h3>
                    <p className="text-sm md:text-lg text-neutral-600 w-full md:w-[80%]">{ content }</p>
                </div>
            </div>
        </section>
    );
};

export default Featured;