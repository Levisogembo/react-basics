const Book = (props) => {
    //console.log('props',props);
    const { img, children,title, author, index} = props
    
    return (
      <article className="book">
        <img
          src={img}
          alt="let them live"
        />
        <h2>{title}</h2>
        <button >Display Title</button>
        <p>{author}</p>
        <span className="number"># {index+1}</span>
        {children}
      </article>
    );
  };

export default Book