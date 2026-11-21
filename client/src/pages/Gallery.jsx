const images = [
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80', caption: 'Green Agricultural Fields' },
  { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80', caption: 'Modern Agricultural Equipment' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80', caption: 'Open Farmland' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80', caption: 'Fresh Crops' },
  { src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80', caption: 'Irrigation' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80', caption: 'Organic Farming' },
];

function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>A glimpse of fields, crops, farmers and farming methods.</p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {images.map((image) => (
            <figure className="gallery-item" key={image.caption} style={{ margin: 0 }}>
              <img src={image.src} alt={image.caption} loading="lazy" />
              <figcaption className="gallery-caption">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
