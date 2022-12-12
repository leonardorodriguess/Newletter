export function Article ({ title, text, tags, image, alt}) {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 rounded-xl sm:shadow-lg gap-2 sm:hover:shadow-gray-500 sm:hover:shadow-black sm:hover:shadow-lg">
      
      <h3 className="text-xl text-custom-200 dark:text-gray-200 font-bold flex flex-col items-center">{title}</h3>

      <div className="w-full justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag, index) => 
          <span 
            key={index}
            className="bg-custom-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase hover:bg-custom-200 hover:scale-110"
          >
            {tag}
          </span>
        )}
      </div>

      <div className="grid gap-1">
        {
          text.map((context, index) => 
            <p 
              key={index}
              className="text-custom-200 dark:text-gray-400"
            >
              {context}
            </p>
          )
        }
      </div>

      { image && <img className="sm:p-4" src={image} />}
      { image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
}