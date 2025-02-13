

const ReuseCard = ({ icon: Icon, title, subtitle, percentage }) => {
    return (
        <div className="px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
        <div className="flex items-center justify-around">
          {Icon && <Icon className="w-8 h-7" />}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-[14px] open-sns font-regular text-[#8CAB91] font-bold" >
              {percentage && (
                <span className="text-2xl text-[#364636] font-bold">{percentage}</span>
              )}
              {title}
            </h1>
            <p className="text-base open-sns text-[#8CAB91]">{subtitle}</p>
          </div>
        </div>
      </div>
    );
}

export default ReuseCard;
