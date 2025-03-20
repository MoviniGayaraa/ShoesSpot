const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_Light_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_Light_outline !rounded-none !text-xs !py-[6px] w-36">
         
        </button>
        <button className="btn_Light_outline !rounded-none !text-xs !py-[6px] w-36">
          
        </button>
      </div>
      <div className="flex flex-col pb-0">
        <p className="text-sm">
        Crafted with a sleek and minimalist design, this shoe features a mix of premium leather and durable materials,
         giving it a refined yet functional style. The clean lines and understated look make it versatile enough to pair
          with any outfit, from casual wear to more refined styles.
        </p>
        <p className="text-sm">
        Built for performance and comfort, this shoe draws inspiration from vintage athletic footwear while incorporating modern enhancements. 
        With a cushioned insole and lightweight construction, it offers all-day comfort for those who appreciate both style
         and functionality. Whether on the court or in the streets, this shoe delivers timeless appeal and reliability.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
