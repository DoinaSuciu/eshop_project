export default {
  state: {
    blogCategories: [
      { id: 10001, name: "Fashion" },
      { id: 10002, name: "Celebrity Jewelry" },
      { id: 10003, name: "Style" },
      { id: 10004, name: "Accessories" },
    ],
    blogs: [
      {
        id: 111,
        category: "Celebrity Jewelry",
        title: "The Jewelry Designers of the Decade",
        coverPhoto: require(`/src/assets/blog/jewelry_designers_of_the_decade/Nikos-Koulis-Earrings - Cover.jpg`),
        intro: `It's been a great decade of jewelry design. Color, form, materials, and even classic diamond designs have been reimagined for modern life. Even serious jewelry has lightened up to become more wearable and personal.
        After JCK published a list of their editor picks for the designers of the decade, it got me thinking about the jewelry I've seen over the past ten years. Which designers have been most influential? What criteria are most important?
        Should I include the perennially influential like JAR, Hemmerle, and Suzanne Belperron? (I didn't but they could always be included!)  When I sat down to make my own list of the most important designers of the decade,
        I concentrated on the ones who have changed the way that we see jewelry today the most. Enjoy more photos of jewelry from these designers on my Jewelry Designers of the Decade Pinterest board: choosing just one photo for each was almost impossible.
        And let me know your picks for designers of the decade in the comments!`,
        content: [
          {
            id: 1111,
            title: "THE COLORIST: James de Givenchy for Taffin",
            photo: require(`/src/assets/blog/jewelry_designers_of_the_decade/Taffin-Opal-Ring.jpg`),
            content: `Fine jewelry has never been more colorful and that's certainly due in part to the inspiring designs of James de Givenchy for Taffin,
            the company he founded in New York in 1996. A 16-carat antique cut sapphire of exceptional color sits in a frame of robin's egg, mustard and ultramarine ceramic.
             A kite shaped fancy yellow diamond is set off with chili colored ceramic. Fire opal is set in wood and strung on a cord or surrounded by a cloud of moonstones.
             Rings have a private surprise of color inside for the secret pleasure of the wearer. This is haute joallerie transformed by the sensibilities of modern art.`,
          },
          {
            id: 1112,
            title: "THE SENSUALIST: Fernando Jorge",
            photo: require(`/src/assets/blog/jewelry_designers_of_the_decade/Fernando-Jorge-Earrings.jpg`),
            content: `At the beginning of the decade, Fernando Jorge was known for colored gemstones with a fresh energy.
            The Electric, Fusion and Stream collections were unlike anything we'd ever seen before with unique cuts, and fluid, sensual shapes.
            But what really launched Jorge into the top ranks of the decade's designers was his 2017 Brilliant Collection, kinetic sculptures in diamonds and gold.
            Delicate and bold, with modern red-carpet ready silhouettes, the Brilliant Collection established Jorge as a serial innovator with an impressive range.`,
          },
          {
            id: 1113,
            title: "THE MATERIALIST: Nikos Koulis",
            photo: require(`/src/assets/blog/jewelry_designers_of_the_decade/Nikos-Koulis-Earrings.jpg`),
            content: `A master of modern geometry inspired by Art Deco, Nikos Koulis has proved to be much more.
            His flair for drama, with serious gemstones framed in black and clear enamel, is now complemented by curves and softness,
            with flexible chains, fringe and pearls. The 2017 Lingerie Collection and the 2019 Feelings Collection are no longer Deco,
            they are something else: distinctive, original, and sophisticated.`,
          },
          {
            id: 1114,
            title: "THE CHANGE AGENT: Suzanne Kalan",
            photo: require(`/src/assets/blog/jewelry_designers_of_the_decade/Suzanne-Kalan-Fireworks.jpg`),
            content: `Suzanne Kalan's Fireworks is the collection of the decade. It's not even her most long-lived hit collection
            (yet: that would be Vitrine, which features gemstone windows with diamonds set behind them.) But Fireworks changed everything,
             making baguettes the coolest cut and chaos the new black. Fireworks began as explosions of off-kilter diamond baguettes, eventually adding a rainbow of sapphires too.
             But it's the pieces that reimagine the classics of diamond jewelry that are the most compelling. In Fireworks, Kalan created irresistibly cool and modern version of diamond
              stud earrings, band rings, bangles, pendants. Wearable and distinctive at the same time, they are the new diamond essentials of a jewelry wardrobe.`,
          },
          {
            id: 1115,
            title: "THE MINIMALIST: Eva Fehren",
            photo: require(`/src/assets/blog/jewelry_designers_of_the_decade/Eva-Fehren-X-Ring.jpg`),
            content: `The X-Ring by Eva Fehren is one of those designs that you can't believe you've never seen before, it's so obviously right.
            Of course, that feeling didn't last, because almost immediately, this iconic design and its variations were copied in a thousand different diamond fashion collections.
             In fact, these designs actually became an entire new category of diamond fashion jewelry, diamond line rings. Eva Fehren designer Eva Zuckerman herself moved into bridal versions,
             adding hexagonal diamonds and generally showing how cool wedding rings could be. Whether the million women wearing jewelry based on the original X Ring know the Eva Fehren brand,
             she is undoubtedly one of the most important jewelry designers of the decade.`,
          },
        ],
      },

      {
        id: 112,
        category: "Fashion",
        title: "A Preview of the Jewels of TEFAF",
        coverPhoto: require(`/src/assets/blog/jewels-TEFAF/TEFAF-choker-detail-750x600.jpg`),
        intro: `The annual TEFAF fair in Maastricht is a showcase for art and antiquities, including museum quality jewelry from contemporary masters like Wallace Chan, Hemmerle,
        and Glenn Spiro as well as vintage jewelry by Suzanne Belperron, Lalique, and other sought after-makers. With a growing international profile thanks to new spin and fall
        events in New York, the annual main event in Maastricht has an awe-inspiring collection of jewelry on display. I won't be attending to photograph the jewelry in person but
        I enjoyed the previewed pieces so much I thought I should share them with you too.  Here is a small sample of the riches that will be on display when the fair opens on March 10.`,
        content: [
          {
            id: 1121,
            title: "Glycines Choker by Philippe Wolfers",
            photo: require(`/src/assets/blog/jewels-TEFAF/Philippe-Wolfers-Choker.jpg`),
            content: `This exquisite 1901 choker with carved watermelon tourmaline, opal, ruby, and garnet with plique-a-jour enamel is a textbook example of everything that is wonderful
            about Art Nouveau jewelry: the whiplash line, the unusual gemstones, the natural inspiration, and the lightness and translucency. It also has great provenance: it comes from
            the estate of Sophie Willstädter, who was the wife of Philippe Wolfers. How lovely to think that he made this beautiful choker specifically for the neck of his beloved.
            I's offered by Epoque Fine Jewels.`,
          },
          {
            id: 1122,
            title: "Toggle Torque Necklace by Suzanne Belperron",
            photo: require(`/src/assets/blog/jewels-TEFAF/Toggle-Torque-Choker-Suzanne-Belperron.jpg`),
            content: `This design by Suzanne Belperron was originally created for Elsa Schiaparelli, who was photographed wearing hers for the September 1933 issue of Vogue Paris.
            The recent revival of the Belperron brand couldn't come at a better time: her designs, like this choker, feel absolutely current. This choker is black lacquer, platinum, 18k
            gray gold and six carats of diamonds from Herz-Belperron.`,
          },
          {
            id: 1123,
            title: "Bridge of Waves Ring by Wallace Chan",
            photo: require(`/src/assets/blog/jewels-TEFAF/Bridge-of-Waves-Wallace-Chan.jpg`),
            content: `Titanium waves dance into white and yellow diamonds in this dynamic design by modern master Wallace Chan. The diamonds sparkle light sunlight on the waves, hidden
             and revealed behind the curves of metal in a design that merges sea and sky.`,
          },
          {
            id: 1124,
            title: "Mesopotamian Carnelian Bangles by G",
            photo: require(`/src/assets/blog/jewels-TEFAF/Glenn-Spiro-Mesopotamian-Carnelian-Bracelets.jpg`),
            content: `Designer Glenn Spiro often uses rare gems (another ring he is showing at this year's fair is set with an amazing ten-carat old-mine cut marquise diamond) but these
            bracelets are designed to highlight something much more precious: four carved carnelian arrowhead-shaped pieces that date from first-millennia Mesopotamia. I love the way this
            ancient material is set in such a modern design. whether or not these dramatic bracelets will give the woman who wears them ancient superpowers, they will clearly give her supreme style.`,
          },
          {
            id: 1125,
            title: "Cosmic Union Cuff by Wallace Chan",
            photo: require(`/src/assets/blog/jewels-TEFAF/Wallace-Chan_Cosmic-Union-Cuff.jpg`),
            content: `This cuff bracelet represents the first time Wallace Chan has created a piece with agate, which represents the layers of the passage of time laid down by stare on the earth.
            Diamonds, sapphires and garnets swirl around the bangle like the cosmos swirling around the planet.`,
          },
        ],
      },

      {
        id: 113,
        category: "Fashion",
        title: "Top Ten: 2022 Spectrum Awards",
        coverPhoto: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/2018-AGTA-Spectrum-Awards.jpg`),
        intro: `It's time to celebrate gems in the annual AGTA Spectrum Awards competition! I think Spectrum is the best jewelry design competition because the editor's
        preview includes all the entries, not just the winners.  Although the winners are always good, it's nice to find favorites that might have been overlooked by the judges too.
        And seeing all the entries gives you a much better idea of overall trends in gemstone jewelry designs. This year, bicolor tourmaline was hot. Emerald also featured in many designs
        (thanks no doubt in part to the fact that emerald mining company Muzo Colombian Emeralds is working with designers to promote its gems).
        Here are the ten gemstone designs I like the best from this year's competition and why I think they are interesting.`,
        content: [
          {
            id: 1131,
            title: "Helen Kim Currens, J.W. Currens: Remember Ring",
            photo: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/Helen-Kim-Currens-Moonstone-Ring.jpg`),
            content: `This J.W. Currens platinum ring set with a 9.25 carat sugarloaf moonstone isn't just beautiful from the top: every curves surface of this ring is beautifully
            engraved and set with gemstones, including tanzanites and rose-cut diamonds (and a lot of diamond pave). Here is a view from the back.`,
          },
          {
            id: 1132,
            title: "Joseph Ambalu, Amba Gem Corp: Emerald Ring",
            photo: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/Amba-Gem-Emerald-Ring.jpg`),
            content: `There are emeralds and then there are emeralds. This 7.16 carat untreated Russian emerald is gem quality, what dealers call “crystal.”
            It's not oiled and has a limpid clarity that reminds us that emerald is a beryl and has a high reflective index. And that Russia can produce fine emerald.
            When I was photographing this ring and talking to AGTA President Jeff Bilgore he told me “Remember this stone: you won't see another one like it.”
            I love that this kind of gemmy stone is set at an angle, it really takes this ring to a new level. And the yellow gold double prongs and double pave band are nice touches too.`,
          },
          {
            id: 1133,
            title: "Zoltan David: Candy Ice Tourmaline Necklace",
            photo: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/Zoltan-Davis-Candy-Ice-Necklace.jpg`),
            content: `This incredible layout of bicolor rubellite tourmalines is perfectly complemented by the design of this geometric necklace,
            with the stones almost floating between spare platinum, palladium and diamond forms. This necklace isn't laying completely flat in the image above because it's
            beautifully constructed to curve around your neck. I love when the design is clearly inspired by the gemstones. This design looks simple but making a piece like this work is
            incredibly difficult. Zoltan David makes it look easy.`,
          },
          {
            id: 1134,
            title: "Evelyn Huang, Evelyn H Jewelry: Aurora Ring/Pendant",
            photo: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/Evelyn-H-Ring-Pendant.jpg`),
            content: `Who wouldn't want more ways to wear their jewelry? This clever design by Evelyn H is a ring that turns into a pendant.
            There is a catch in back that joins the star to the shank and bails on the top and bottom to hold a chain so the necklace lays correctly.
            The center pink spinel is surrounded by spinel, pink sapphire, and diamonds (including a cool baguette diamond edge.) See how the halo around the center stone is shades of pink?
            All of these little details plus the convertibility make it a winner for me. (And I don't even like pink.)`,
          },
          {
            id: 1135,
            title: "Erica Courtney: Gemstone Mandala Pendant",
            photo: require(`/src/assets/blog/top-ten-2018-AGTA-spec-awards/Erica-Courtney-Medallion.jpg`),
            content: `Another Spectrum juggernaut, designer Erica Courtney knows her way around gemstones. (If I went to Spectrum one year and found she didn't win anything I would be shocked.)
            Her winning hundred-carat emerald pendant and more intricate chrysoberyl gemstone mandala are probably popping up all over your Instagram feed. I decided instead to photograph this
            medallion, which surrounds a two-carat Paraiba with tourmalines, garnets and diamonds. Its sweet-and-sour color combo gives me a Pucci vibe that really pairs well with the design.
            I like the way this pendant flirts with floral but comes down firmly in kaleidoscope.`,
          },
        ],
      },
      {
        id: 114,
        category: "Style",
        title: "The Main Shapes of Diamond Rings",
        coverPhoto: require(`/src/assets/blog/main-shapes-diamond-rings/Triple_0.50ct_Engagement_Ring_Model.jpg`),
        intro: `There are probably far more cuts of engagement rings than you might realise, but we're going to focus on nine of the most well-known diamond shapes for rings and give you
        each of the diamond shape names, so you have everything you need when you search online or in-store. Plus discover who different types of diamond cuts might be best suited to and why
        each has its own unique beauty.`,
        content: [
          {
            id: 1141,
            title: "The Brilliant Cut Diamond",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_4_EJ2209B02_FindTheDiamondShape.webp`),
            content: `By far the most popular of the diamond ring shapes, particularly when shopping for an engagement ring, the round diamond is a classic beauty that needs no introduction.
             Round diamonds are cut to optimise brilliance, with over 58 facets that reflect light and cast tiny rainbows in a breath-taking show of sparkle. If you're not sure what your partner
              would like, a round cut engagement ring is likely your safest bet as it is timeless and elegant with a wow-factor the moment that symbolic little box is opened. Of all the diamond
              shapes, round cut diamonds lose the most raw material during the shaping process, which gives them their higher price tag.`,
          },
          {
            id: 1142,
            title: "The Princess Cut Diamond",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x16842_5_EJ2209B02_FindTheDiamondShape.webp`),
            content: `Square cut diamond rings have been hot on the heels of their spherical cousin for many years, and they are a very popular choice amongst those hoping for an excitable 'yes!'
             from their loved one. Beloved for its contemporary style and sparkle, the princess cut is the most popular fancy shape diamond. Square on the top, it features four bevelled sides
              and comes in at a point (like an upside-down pyramid) beneath the shiny surface of the ring.`,
          },
          {
            id: 1143,
            title: "Emerald Cut Diamond Rings",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_6_1200x16842_EJ2209B02_FindTheDiamondShape.webp`),
            content: `Emerald cut diamonds are elegant and refined. The elongated shape and octagonal step-cut faceting are great for understated glamour and its flat top highlights the stone's
            colour and clarity. An emerald cut ring is perfect for those with wider fingers as the thicker stone gives the illusion of slenderness. If you're looking for an Art Deco-inspired style
             with an edge, an emerald cut diamond ring is for you.`,
          },
          {
            id: 1144,
            title: "The Oval Diamond Ring",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_7_EJ2209B02_FindTheDiamondShape.webp`),
            content: `The oval shape combines the elegance and sparkle of the round brilliant with the uniqueness of the marquise diamond. Its shimmering facets make the light dance and create the
            illusion of longer fingers. Bold and sophisticated, the oval is a unique shape for the wearer who wants to express their individuality. Oval diamond engagement rings are popular for their
            nod to the traditional round diamond design, whilst still showcasing the wearers own style and taste and, similarly to the marquis diamond, they help to create the illusion of longer, more
             slender fingers.`,
          },
          {
            id: 1145,
            title: "The Pear Shaped Diamond",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_8_1200x16842_EJ2209B02_FindTheDiamondShape.webp`),
            content: `Shaped like a tear (of joy) with an extraordinary display of light, the flattering pear shape elongates the finger — especially when worn with the point facing the nail.
            Its facets match those of the brilliant round cut and give of magnificent sparkle. It's one of the least common engagement ring shapes, so, if you want to show your individuality,
            a pear-shaped diamond ring is perfect for you.`,
          },
          {
            id: 1146,
            title: "The Marquise engagement Ring",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_9_1200x16842_EJ2209B02_FindTheDiamondShape.webp`),
            content: `The marquis diamond shape was first commissioned at the request of King Louis the Fifteenth of France who wanted a cut shape that resembled the lips of his mistress,
            Jean Antoinette Poisson. Its oval shape meets in pointed ends, resembling the hull of a ship. In addition to being unique, a marquise diamond ring is great for someone looking to
            create the illusion of elongated fingers.`,
          },
          {
            id: 1147,
            title: "The Cushion Cut Diamond",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_11_1200x16842_EJ2209B02_FindTheDiamondShape.webp`),
            content: `Combining the two most popular diamond shapes : the round brilliant and the princess cut : a cushion cut diamond ring features curved corners and brilliant
            facets for a soft look with a lot of sparkle. The rounded edges put a unique spin on the classic round brilliant offering the perfect balance between traditional and contemporary style.`,
          },
          {
            id: 1148,
            title: "Heart Shaped Diamond",
            photo: require(`/src/assets/blog/main-shapes-diamond-rings/1200x1684_12_1200x16842_EJ2209B02_FindTheDiamondShape.webp`),
            content: `Heart-shaped diamonds are classic symbols of love and are cut with a precise length-to-width ratio to ensure expertly symmetrical curves. Sentimental and as rare as true
             connection, a heart shaped diamond ring is an excellent choice for the romantic who wears their heart on their sleeve (and finger). Worn with the point facing the fingernail, a heart
              shaped diamond elongates the finger however, tradition states that heart shaped rings should be worn with the point facing your body to symbolise that your heart is taken, which way
              would you choose?`,
          },
        ],
      },
      {
        id: 115,
        category: "Accessories",
        title: "Trending: Filled Hoops",
        coverPhoto: require(`/src/assets/blog/trending-filled-hoops/Nada-G-Filled-Hoops-750x600.jpg`),
        intro: `Hoops are the most important earring silhouette right now. But what looks especially fresh are hoops that play with the negative space in the center of the circle,
          filling it with gems, metal, designs or a combination of the two. It allows a classic to become something entirely new.
          I've been noticing spectacular examples for about a year now and the trend shows no sign of slowing. here are a few of my favorite hoops with a stylish filling in the center.`,
        content: [
          {
            id: 1151,
            title:
              "Noor Fares rainbow hoops with rock crystal quartz in the center.",
            photo: require(`/src/assets/blog/trending-filled-hoops/Noor-Fares-Hoops.jpg`),
            content: ``,
          },
          {
            id: 1152,
            title: "Stephen Webster Vertigo Hoops with a cameo center",
            photo: require(`/src/assets/blog/trending-filled-hoops/Stephen-Webster-Vertigo.jpg`),
            content: ``,
          },
          {
            id: 1153,
            title: "Jacqueline Cullen gray agate hoops",
            photo: require(`/src/assets/blog/trending-filled-hoops/Jacqueline-Cullen-Gray-Agate.jpg`),
            content: ``,
          },
          {
            id: 1154,
            title: "Arunashi Titanium and mother-of-pearl hoops",
            photo: require(`/src/assets/blog/trending-filled-hoops/Arunashi-Titanium-Hoops.jpg`),
            content: ``,
          },
          {
            id: 1155,
            title: "Nikos Koulis pearl and diamond hoops",
            photo: require(`/src/assets/blog/trending-filled-hoops/Nikos-Koulis-Pearl-Hoops.jpg`),
            content: ``,
          },
        ],
      },
      {
        id: 116,
        category: "Style",
        title: "Top Ten: Metal & Smith",
        coverPhoto: require(`/src/assets/blog/top-ten-metal-smith/AMT-Jewelry-Earrings.jpg`),
        intro: `Metal & Smith promotes itself as #notatradeshow and it is quite different from the other jewelry trade shows I attend each year. It's in a non-traditional pop-up space near
        Javitz in New York. It's only one day, which really does focus your mind.  Each designer has a single table. It can be a bit overwhelming at first when you walk into a room with every
        surface covered in sparkle.  So. Much. Jewelry. So. Little. Time. Overall, I really do like the speed-date format: you meet a designer, get an overview of her (or his) greatest hits,
        and onto the next. It's definitely challenging not to be able to sit down and go through the entire collection but it makes for a very productive and efficient day. My favorite part
        of Metal & Smith is that I always (well, at each of the two shows I've been to so far) meet someone fabulous and new. I'm sure that I missed something amazing, so apologies to people
        I didn't see this time. And there were some fabulous things that I wasn't able to get a good image of too. (I hope to catch more great designs at the next edition on August 21.)
        These are my favorite ten pieces from the Spring edition of Metal & Smith.`,
        content: [
          {
            id: 1161,
            title: "Tourmaline Rings by Rock & Gem",
            photo: require(`/src/assets/blog/top-ten-metal-smith/RockGems-photo-by-Kremkow.jpg`),
            content: `How fabulous is that watermelon tourmaline ring on the left? The gem dealer envisioned a pair of earrings but Sig Ward of Rock & Gems had other plans.
             That line of baguettes down the middle holds it all together. The ring on the right also is a fresh way to set a watermelon tourmaline.`,
          },
          {
            id: 1162,
            title: "Earrings by Lauren Harper",
            photo: require(`/src/assets/blog/top-ten-metal-smith/Lauren-Harper-earrings-800.jpg`),
            content: `I've been a Lauren Harper fan for a long time so I was delighted to see that she decided to try Metal & Smith for the first time. She has a really distinctive visual style.
            I love how wearable her earrings are: Deco inspired but very modern and wearable too.`,
          },
          {
            id: 1163,
            title: "Earrings by Amali",
            photo: require(`/src/assets/blog/top-ten-metal-smith/Amali-Earrings-800.jpg`),
            content: `Choosing just one Amali piece was a challenge. Case in point: check out the killer pair of opal earrings I featured on Instagram. But I have to choose these tourmaline
            earrings as my overall favorite for the  lovely stepping stone rhythm and ombre shading of tourmaline (that is a bit hard to see in the image.) Obviously handcrafted from delicate
             18k gold chain, Sara Freedenfeld's work really hangs together as a collection too.`,
          },
          {
            id: 1164,
            title: "Moonstone Ring from Campbellian Collection",
            photo: require(`/src/assets/blog/top-ten-metal-smith/Campbellian-Moonstone1.jpg`),
            content: `She had me at moonstone. This might be a traditional ring design but the quality of this moonstone is exceptional: it's the best large rainbow labradorite I've seen
            in a long time. I'll be featuring more pretty gems from Campbellian Collection in an upcoming post.`,
          },
          {
            id: 1165,
            title: "Rose Cut Ring by Alberian & Aulde",
            photo: require(`/src/assets/blog/top-ten-metal-smith/AlberianAuldeRing.jpg`),
            content: `Warren and Mary are also long-time favorites. They are fine artists and their work is meticulously detailed.  My favorites at this edition of the show included some
            bold chain bibs and colorful baguette earrings that I couldn't quite capture in photos. But, as you can see, this rose-cut diamond mosaic ring was quite photogenic.  It would make
             a lovely engagement ring.`,
          },
        ],
      },
      {
        id: 117,
        category: "Accessories",
        title: "Behind the Design",
        coverPhoto: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Lingerie-Collection-Hoops-750x600.jpg`),
        intro: `Based in Athens, designer Nikos Koulis is known for his inspired gem geometry. Enamel, colorful gems and angles create an updated Art Deco feeling in his work.
        His latest collection, Lingerie, introduces round shapes for the first time. The pieces have an intricate construction: the large necklace took six months to craft.`,
        content: [
          {
            id: 1171,
            title: "",
            photo: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Lingerie-Necklace-Bangle.jpg`),
            content: `I talked to him at Couture about his inspiration for the new collection and some extraordinary new pieces with transparent enamel added to his existing collections.`,
          },
          {
            id: 1172,
            title: "",
            photo: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Lingerie-Ring-800.jpg`),
            content: `After so many architectural designs, I had the feeling that I wanted to use rounded shapes. Pearl is the ideal material, most of the pearls are round. I started doing
            this pearl collection using these trigons and all these Deco patterns I used in the V collection. So here you have the result.`,
          },
          {
            id: 1173,
            title: "",
            photo: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Lingerie-Cuff.jpg`),
            content: `It's still quite geometric. This is the first time I'm using round stones. I normally don't use round stones, I don't like round stones.

            Then I revisited the collection with gold balls instead of pearls. For me it's a modern lace. It's very delicate. It's very soft.

            I think that this is the moment to move to more organic designs. This is the beginning.`,
          },
          {
            id: 1174,
            title: "",
            photo: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Sapphire-Ring-800.jpg`),
            content: `This blue sapphire ring started when I found the stone. I fell in love with the stone. I wanted not to surround the blue sapphire with the black enamel because of it's beauty.
             I wanted an open space around it. It was the first ring where the black enamel doesn't touch the stone. Now we have more styles based on this ring.`,
          },
          {
            id: 1175,
            title: "",
            photo: require(`/src/assets/blog/behind-design-nikos-koulis/Nikos-Koulis-Enamel-Earrings-800.jpg`),
            content: ``,
          },
        ],
      },
      {
        id: 118,
        category: "Celebrity Jewelry",
        title: "Top 5 Oscar Jewelry Moments Ever",
        coverPhoto: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Best-Oscars-Jewelry-675x600.jpg`),
        intro: `—There is no bigger stage for fine jewelry than the Academy Awards red carpet. It's the Super Bowl of jewelry, which is why celebrity placements are a jewelry brand's equivalent of Super Bowl
         commercials. Yes, they are often paid to wear the jewelry and very few own their own Oscar jewelry but we enjoy them much more than the main event itself. And like any self-respecting American spectacle,
          the jewels at the Academy Awards have their own hashtag: #OscarJewelry. Follow along on Twitter and Instagram for cheers and jeers and join in the fun.`,
        content: [
          {
            id: 1181,
            title: "1. Nicole Kidman in L'Wren Scott at the 2008 Oscars",
            photo: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Nicole-Kidman-LWren-Scott-2008-Oscars.jpg`),
            content: `This awe-inspiring statement necklace by L'Wren Scott is 1,399 carats but still manages to look a bit bohemian and ethereal. Nicole Kidman has worn many wonderful jewels to the Oscars,
            including two amazing L'Wren Scott rough diamond cuffs in 2007 that I was lucky to see in person in Basel at the William Goldberg booth that year, but this necklace is my favorite. It also helped
             launch the rough diamond trend so it was a landmark piece for jewelry style as well.`,
          },
          {
            id: 1182,
            title: "2. Angelina Jolie in Lorraine Schwartz at the 2009 Oscars",
            photo: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Angelina-Jolie-Oscars-2009-Lorraine.jpg`),
            content: `So simple. Yet so mesmerizing. The Lorraine Schwartz Colombian emerald earrings and matching ring that Angelina Jolie wore to the 2009 Oscars transformed the emerald market. I remember
             interviewing emerald dealers about the resulting surge in sales, and also remembered how disdainful they were about the quality of the stones, which were noticeably included (as emeralds often are.)
              it didn't matter what the dealers thought: suddenly everyone realized that emeralds didn't have to be clean to be beautiful. In fact, one reason these gems glow is the way their inclusions hold the
               light.`,
          },
          {
            id: 1183,
            title: "3. Margot Robbie in Van Cleef & Arpels at the 2015 Oscars",
            photo: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Margot-Robbie-van-Cleef.jpg`),
            content: `This necklace is an icon of jewelry design because the zipper actually works. You zip up the necklace and you can wear the shorter length as a bracelet.
            I've seen this necklace style up close at the Vicenza Jewelry Museum and it really is quite beautiful: in person, the zipper is a beautiful texture.`,
          },
          {
            id: 1184,
            title: "4. Beyonce in Lorraine Schwartz at the 2005 Oscars",
            photo: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Beyonce-Lorraine-Schwartz-Oscars-2005.jpg`),
            content: `This was the debut of Lorraine Schwartz as the ultimate red carpet jeweler. These earrings are even more amazing up close.  I visited Lorraine in Basel the next year and felt
            her diamond handkerchief mesh: it's soft as silk and incredibly flexible.  The craftsmanship is impeccable and she continues to break new design ground.`,
          },
          {
            id: 1185,
            title: "5. Keira Knightly in Bulgari at the 2006 Oscars",
            photo: require(`/src/assets/blog/top-15-oscar-jewelry-moments-ever/Keira-Knightley-Bulgari-Oscars-2006.jpg`),
            content: `This multicolor Bulgari bib necklace has a great Gina Lollobrigida vibe.  And it is such a bold choice with her aubergine one-shoulder Vera Wang dress that
            I just can't help but love it.`,
          },
        ],
      },
      {
        id: 119,
        category: "Celebrity Jewelry",
        title: "Best Earrings of the Met Gala",
        coverPhoto: require(`/src/assets/blog/best-earrings-met-gala/Met-Gala-Earrings-750x600.jpg`),
        intro: `Because this year's Met Gala celebrates Commes des Garcons, sartorial experimentation is the theme of the night. Jewelry experimentation? Not so much. But a few looks stood out.
        It's not surprising that they are almost all earrings, since the earring category is the most innovative in jewelry today. Here are my five favorite earrings of the Met Gala.`,
        content: [
          {
            id: 1191,
            title: "Rihanna in Chopard",
            photo: require(`/src/assets/blog/best-earrings-met-gala/Rihanna-wears-Rihanna-Loves-Chopard.jpg`),
            content: `Rihanna ruled the night wearing Commes des Garcon and earrings from her own jewelry collection for Chopard. Best commercial ever.`,
          },
          {
            id: 1192,
            title: "Blake Lively in Lorraine Schwartz & Ofira",
            photo: require(`/src/assets/blog/best-earrings-met-gala/Blake-Lively-Met-gala-800.jpg`),
            content: `Spectacular earrings set with 82 carats of Burmese sapphires. If this is what happens when gem-obsessed Lorraine Schwartz collaborates with her gold-obsessed sister Ofira, bring it on.`,
          },
          {
            id: 1193,
            title: "Sarah Paulson in Irene Neuwirth",
            photo: require(`/src/assets/blog/best-earrings-met-gala/Sarah-Paulson-Irene-Neuwirth.jpg`),
            content: `I love the combination of black and blue and these earrings by Irene Neuwirth are spectacular example, set with rich blue sapphire and indicolite tourmaline.`,
          },
          {
            id: 1194,
            title: "Emily Ratajkowski in Kimberly McDonald",
            photo: require(`/src/assets/blog/best-earrings-met-gala/KMD-Hoops.jpg`),
            content: `Opal hoops by Kimberly McDonald? Sign me up. The colors are the perfect complement for Emily's mermaid gown.`,
          },
          {
            id: 1195,
            title: "Cassie in Rinaldy Yunardi",
            photo: require(`/src/assets/blog/best-earrings-met-gala/Cassie-Ear-Cuff-800.jpg`),
            content: `I had not heard of Cassie before tonight but these ear cuffs (she wore two!) changed that in a hurry. The cuffs, a grand sci-fi statement in diamonds are
            a collaboration between her stylist B. Akerlund and Indonesian brand Rinaldy Yunardi (and may be costume, but still.)`,
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
};
