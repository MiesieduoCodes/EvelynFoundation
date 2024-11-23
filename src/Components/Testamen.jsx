

export const Testament = () => {
    return (
      <>
          <div className='w-full h-[12rem] items-center flex justify-center text-[2.5rem] text-bold'>Testimonial</div>
  
          <div className='w-full h-auto items-end pb-16  grid grid-cols-1 md:px-32 md:grid-cols-2 place-items-center gap-6'>
            {[1, 2, 3, 4].map(e => {
              return (
                  <li key={e} className='w-full flex gap-10 px-6 h-full'>
                    <img src="src\assets\istockphoto-1889533246-1024x1024.jpg" alt="" className='shadow-black shadow-md w-12 h-12 rounded-full object-cover' />
                    <div className='p-8 rounded-sm flex w-[90%] flex-col gap-4 h-full shadow-black/20 shadow-lg'>
                      <span className="h-[95%] w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam laudantium, explicabo a beatae labore sequi facilis quod quaerat.
                      </span>
                      <span className='relative w-full'>Carl Adams</span>
                    </div>
                  </li>
              );
            })}
          </div>
      </>
    );
  };