use bags_db;


INSERT INTO bags 
SET id="", name="Prada", model="Elektra", quantity=1, price=2210.00, color="Red", material="Leather", SKU = "1BD120_2BB0_F0C9F_V_OBH", image="https://assets.prada.com/content/dam/prada-ecommerce/images/details/1BD120_2BB0_F0C9F_V_OBH-1.jpg/_jcr_content/renditions/original", description= "Calf leather. Detachable studded leather shoulder strap. Studded strap with buckle on the front. Push-lock clasp.", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Prada", model="Elektra Shoulder", quantity=1, price=2840.00, color="Black", material="Leather", SKU = "1BA179_2BB0_F0D9A_V_OBH", image="https://assets.prada.com/content/dam/prada-ecommerce/images/details/1BA179_2BB0_F0D9A_V_OBH-1.jpg/_jcr_content/renditions/original", description= "Saffiano leather. Studded leather handle. Detachable leather shoulder strap. Polished steel-finish metal hardware.", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Chanel", model="Classic Double Flap", quantity=1, price=2069.84, color="Blue", material="Leather", SKU = "44468171368", image="https://item5.tradesy.com/images/chanel-255-reissue-classic-double-flap-quilted-cc-logo-small-med-navy-blue-lambskin-leather-shoulder-21222444-0-1.jpg?width=440&height=440", description= "Chanel Classic 2.55 Flap Bag in Quilted Navy Blue Lambskin Leather with Gold Hardware GHW in Small Medium size with Double flaps. This stylish shoulder bag is crafted of soft and smooth diamond quilted Navy lambskin leather. There are gold chain link shoulder straps threaded with navy leather. ", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Chanel", model="Quilted Nylon Cocoon Shoulder", quantity=1, price=2400.00, color="Red", material="Nylon", SKU = "BT13432", image="https://cdn.theluxurycloset.com/uploads/products/full/1523941182-re-cha-sh-w-00109-m-01-pl.jpg", description= "Chanel Red Quilted Nylon Coco Cocoon Shoulder Bag is a starter pack for your charm to do the talking and everyone to stop and stare. The brilliantly bright red simply goes with with the design of the bag that comes.", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Hermes", model="Bazar Pouch Medium", quantity=1, price=1175.00, color="Blue", material="Leather", SKU = "H066398CKB3", image="https://assets.hermes.com/is/image/hermesproduct/bazar-pouch-medium-model--066398CKB3-front-1-300-0-435-435.jpg", description= "Hermes pouch in Togo calfskin, silver and palladium plated zip closure", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Hermes", model="Lindy 30", quantity=1, price=7800.00, color="Blue", material="Leather", SKU = "H073426CK2Z", image="https://assets.hermes.com/is/image/hermesproduct/lindy-30-bag--073426CK2Z-front-1-300-0-435-435.jpg", description= "Hermes bag in taurillon Clemence leather Shoulder strap and hand strap Palladium hardware", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Louis Vuitton", model="Montaigne MM", quantity=1, price=2460.00, color="Brown", material="Canvas", SKU = "M41056", image="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton-montaigne-mm-monogram-handbags--M41056_PM2_Front%20view.jpg?wid=485&hei=485", description= "The Montaigne bag in iconic Monogram canvas combines a smart, structured exterior with a spacious, well-organized interior, making it ideal for business. It can be carried in the hand, on the arm or on the shoulder, thanks to its removable shoulder strap.", sold = "FALSE", bought_by="x";

INSERT INTO bags 
SET id="", name="Louis Vuitton", model="Neverfull MM", quantity=1, price=2260.00, color="Blue", material="Leather", SKU = "M51053", image="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton-neverf-mm-epi-bleu-denim-epi-leather-handbags--M51053_2_PM2_Front%20view.jpg?wid=485&hei=485", description= "A Louis Vuitton classic.  Soft calfskin leather embossed with iconic Louis Vuitton icons.  A must for every woman's collection.", sold = "FALSE", bought_by="x";

INSERT INTO bags 	
SET id="", name="UCI Coding Bootcamp", model="Universal Plastic", quantity=1, price=12000.00, color="White", material="Plastic", SKU = "N/A", image="https://images-na.ssl-images-amazon.com/images/I/81sbXw5yIAL._SY355_.jpg", description= "Hang in there buddy.", sold = "FALSE", bought_by="x";	

INSERT INTO bags 	
SET id="", name="Glad", model="Tall Trash Bag", quantity=1, price=8.99, color="White", material="Plastic", SKU = "N/A", image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQX1H7Ytg77d_zS_T85UXOOi-rAiRKnpODlUWNWVeHjjif9eJA&usqp=CAY", description= "This is all we can afford after buying the white plastic bag.", sold = "FALSE", bought_by="x";


INSERT INTO users
SET id="", name="Jane Smith", email="jane@something.com", password ="word", credits=10000; 
-- itemsPurchased = "true";

INSERT INTO users 
SET id="", name="Melanie Jones", email="mel@something.com", password ="word", credits=10000;
-- itemsPurchased = "true";

INSERT INTO users
SET id="", name="Shaz Ifthi", email="shaz@something.com", password ="word", credits=10000; 
-- itemsPurchased = "true";

INSERT INTO users
SET id="", name="Kim Geller", email="roseg@something.com", password ="word", credits=10000; 
-- itemsPurchased = "true";

-- SELECT * FROM bags_db.user;