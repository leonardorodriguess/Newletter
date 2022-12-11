export function Article ({ title, text, tags, image, alt}) {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg">
      <h3 className="text-xl text-custom-200 dark:text-gray-200 font-bold flex flex-col items-center">{title}</h3>
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
    </div>
  );
}