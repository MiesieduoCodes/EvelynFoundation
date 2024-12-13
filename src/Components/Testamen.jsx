export const Testamen = () => {
  return (
    <>
        <div className='w-full h-[12rem] items-center flex justify-center text-[2.5rem] text-bold'>
          Testimonials
        </div>

        <div className='w-full h-auto items-end pb-16 grid grid-cols-1 md:px-32 md:grid-cols-2 place-items-center gap-6'>
          {[1, 2, 3, 4].map(e => {
            return (
                <li key={e} className='w-full flex gap-10 px-6 h-full'>
                  <img 
                    src="src/assets/istockphoto-1889533246-1024x1024.jpg" 
                    alt="Testimonial" 
                    className='shadow-black shadow-md w-12 h-12 rounded-full object-cover' 
                  />
                  <div className='p-8 rounded-sm flex w-[90%] flex-col gap-4 h-full shadow-black/20 shadow-lg'>
                    {e === 1 && (
                      <span className="h-[95%] w-full">
                        &quot;The Evelyn Oweibo Foundation has been a beacon of hope for many families. Their health initiatives and outreach programs have saved lives and given us a brighter future.&quot;
                      </span>
                    )}
                    {e === 2 && (
                      <span className="h-[95%] w-full">
                        &quot;As a teacher, I&apos;ve seen firsthand how the foundation&apos;s educational support has helped countless students excel. The Evelyn Oweibo Foundation is truly changing lives one child at a time.&quot;
                      </span>
                    )}
                    {e === 3 && (
                      <span className="h-[95%] w-full">
                        &quot;I&apos;ve been fortunate to witness the foundation&apos;s work in rural areas. Their commitment to providing clean water and sanitation is helping entire communities thrive.&quot;
                      </span>
                    )}
                    {e === 4 && (
                      <span className="h-[95%] w-full">
                        &quot;The foundations empowerment programs for women have inspired so many in our community. I&apos;ve personally benefited from their vocational training, and I&apos;m now running my own business.&quot;
                      </span>
                    )}
                    <span className='relative w-full'>
                      {e === 1 && "Martha Williams"}
                      {e === 2 && "John Doe"}
                      {e === 3 && "Sarah O'Connor"}
                      {e === 4 && "Tina Lawrence"}
                    </span>
                  </div>
                </li>
            );
          })}
        </div>
    </>
  );
};

export default Testamen;
