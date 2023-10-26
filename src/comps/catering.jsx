import React, { useEffect } from 'react';
const WeddingBuffetMenu = () => {
    
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    return (
      <div className="bg-white text-gold-700 p-8">
        <h1 className="text-3xl font-semibold mb-4">Our Clients' Favorite & Best Value</h1>
  
        <section>
          <h2 className="text-2xl font-bold">Menu Selection</h2>
          <div className="grid md:grid-cols-2 gap-4 my-4">
        
            <div>
              <h3 className="text-xl font-semibold">Fresh Salad</h3>
              <p>Toppings include: Bleu Cheese, Ranch, Thousand Island, Italian.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Potato Display</h3>
              <p>Fresh, homemade mashed potatoes that your guests can top with their personal favorites of creamy butter - fresh sour cream - bacon bits - grated cheese</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Marinated Chicken</h3>
              <p>Large boneless chicken breast marinated in a blend of Italian seasonings. So tender you can cut it with a fork!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Chicken Parmesan</h3>
              <p>Lightly seasoned and breaded chicken breast topped with provolone cheese and our own perfected, homemade meat sauce</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Famous Lasagna</h3>
              <p>Served in a premium chafer to keep it fresh and hot until the very last serving</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Hot Vegetables</h3>
              <p>Served in a premium chafer to keep it fresh and hot until the very last serving</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Homemade Rolls</h3>
              <p>Fresh made from scratch served with creamy butter</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Beverages</h3>
              <p>Sweet tea and unsweet tea - soft drinks</p>
            </div>
          
          </div>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Additional Options</h2>
          <div className="bg-white text-gold-700 p-03">
      <section>
        <p className="text-lg mb-4">Just come in and enjoy!</p>

        <p className="mb-4">
          We also customize any menu item you may desire. Custom items or add on items will be quoted after selections are requested.
        </p>

        <h2 className="text-xl font-bold mb-2">Add a Seafood Dish</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Salome Florentine</li>
          <li>Parmesan - Crusted Orange Roughy</li>
          <li>Our Shrimp Diane is wonderful. You may add this dish</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Dessert Station with Coffee</h2>

        <p className="mb-4">
          This Menu is beautifully color-coordinated to your wedding buffet setting.
        </p>

        <p className="mb-4">
          We give complimentary tastings for our Clients.
        </p>

      

        <h2 className="text-xl font-bold mb-2">Glassware Dish Set</h2>
        <p>
          We also offer a very nice 5-piece glassware dish set for that added charm of elegance that includes: beautiful floral designed dinner plate, salad plates, glasses, coffee cups, dessert plates, and white cloth napkins fanned and displayed on tables.
        </p>
      </section>
    </div>
        </section>
  
        {/* Footer with contact info, etc. */}
        <footer className="mt-8">
          <p>Contact us at <a href="mailto:BBHMemphis@gmail.com" className="underline">BBHMemphis@gmail.com</a> or Text/Call 901.690.3671</p>
          {/* Other footer info... */}
        </footer>
      </div>
    );
  };
  
  export default WeddingBuffetMenu;