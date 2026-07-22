const threeMSeriesTableHeaders = ['Product Code', 'Description', 'Texture', 'Adhesive Type-Colour', 'Durability'];

const threeMEconomySeriesRows = [
  { code: 'IJ15-10', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 1 year' },
  { code: 'IJ15-20', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 1 Year' },
  { code: 'IJ15-114', description: 'Clear', texture: 'Gloss', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 1 Year' },
  { code: 'IJ15-124', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 1 Year' },
  { code: 'IJ16-10', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Permanent-Grey', durability: 'Up to 1 Year' },
  { code: 'IJ16-20', description: 'White', texture: 'Matte', adhesive_type_colour: 'Permanent-Grey', durability: 'Up to 1 Year' },
  { code: 'IJ16-10R', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Removable-Grey', durability: 'Up to 1 Year' },
  { code: 'IJ16-20R', description: 'White', texture: 'Matte', adhesive_type_colour: 'Removable-Grey', durability: 'Up to 1 Year' },
];

const threeMPromotionalSeriesRows = [
  { code: 'IJ12', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Semi Permanent-Grey', durability: 'Up to 3 years' },
  { code: 'IJ1220-20', description: 'White', texture: 'Matte', adhesive_type_colour: 'Semi Permanent-Grey', durability: 'Up to 3 Years' },
  { code: 'IJ4156', description: 'Clear', texture: 'Gloss', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 3 Years' },
  { code: 'IJ4157', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 3 Years' },
  { code: 'IJ1229', description: 'One Way Vision', texture: 'Gloss', adhesive_type_colour: 'Permanent-Black', durability: 'Up to 1 Year' },
];

const threeMIntermediateSeriesRows = [
  { code: 'IJ35C-10', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Permanent-Grey', durability: '3-5 years' },
  { code: 'IJ35C-20', description: 'White', texture: 'Matte', adhesive_type_colour: 'Permanent-Grey', durability: '3-5 Years' },
  { code: 'IJ40C-10R', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Removable-Grey', durability: '3-5 Years' },
  { code: 'IJ40C-20R', description: 'White', texture: 'Matte', adhesive_type_colour: 'Removable-Grey', durability: '3-5 Years' },
  { code: '8508', description: 'Clear', texture: 'Gloss', adhesive_type_colour: 'Permanent-Clear', durability: '3-5 Years' },
  { code: '8509', description: 'Clear', texture: 'Luster', adhesive_type_colour: 'Permanent-Clear', durability: '3-5 Years' },
  { code: '8510', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: '3-5 Years' },
];

const threeMCastSeriesRows = [
  { code: 'IJ180C-10', description: 'White', texture: 'Gloss', adhesive_type_colour: 'Removable-Grey', durability: '5-7 years' },
  { code: 'IJ8150', description: 'Optically Clear', texture: 'Gloss', adhesive_type_colour: 'Removable-Clear', durability: '5-7 Years' },
  { code: '8519', description: 'Clear', texture: 'Luster', adhesive_type_colour: 'Permanent-Clear', durability: '5-7 Years' },
  { code: '8520', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: '5-7 Years' },
  { code: '8993', description: 'Anti Graffiti', texture: 'Gloss', adhesive_type_colour: 'Permanent-Clear', durability: '5-7 Years' },
];

const threeMPvcFreeRows = [
  { code: '48C-20R', description: 'White', texture: 'Matte', adhesive_type_colour: 'Removable-Grey', durability: '3-5 years' },
  { code: '8050M', description: 'Clear', texture: 'Matte', adhesive_type_colour: 'Permanent-Clear', durability: '3-5 Years' },
];

const threeMOthersRows = [
  { code: '3645', description: 'Floor Overlaminate', texture: 'Luster', adhesive_type_colour: 'Permanent-Clear', durability: 'Up to 1 Year' },
  { code: '3950', description: 'Edge Sealer', texture: '-', adhesive_type_colour: '-', durability: '-' },
];

export const itmsProductContent = {
  '3m': {
    'scotchcal-graphic-film': {
      title: '3M™ Scotchcal™ Graphic Film',
      intro:
        'The 3M Graphics product portfolio gives graphics manufacturers the ability to bring their client’s vision to life. With our total graphics, your brands will get the attention they deserve. No matter the vehicles your customers drive, the buildings they occupy or the locations their business serve, every surface they own can become an extension of their brands. Car wraps can create dynamic vehicle advertising, window graphics can increase foot traffic, and wall wraps can invigorate the customer experience. When your customers want to make their presence known, the sky’s the limit. From perforated films to printable films and more, graphic manufacturers and installers have an ever-growing arsenal of 3M graphic films.',
      heroImage: '/itms/img/banner/818_49268_3M_Traslucent_StillLife_01.jpg',
      sections: [
        {
          title: '3M Graphic Film Portfolio',
          description: 'The source page presents 3M Scotchcal Graphic Film as a complete portfolio of printable and translucent films for vehicle, window and wall graphics.',
          items: [
            { label: 'Perforated films', description: 'Part of the 3M graphics arsenal designed for dynamic advertising applications.' },
            { label: 'Printable films', description: 'Printable films provide versatile branding solutions across surfaces.' },
            { label: 'Vehicle advertising', description: 'Car wraps that deliver dynamic advertising and brand visibility.' },
            { label: 'Window graphics', description: 'Window graphics engineered to increase foot traffic and customer engagement.' },
            { label: 'Wall wraps', description: 'Wall wraps that invigorate the customer experience and brand spaces.' },
          ],
        },
      ],
    },
    'scotchcal-translucent-graphic-film-3630-series': {
      title: '3M™ Scotchcal™ Translucent Graphic Film 3630 Series',
      intro:
        'High-visibility translucent graphic film used for illuminated signage applications.',
      heroImage: '/itms/img/banner/2630-3M.jpg',
      sections: [
        {
          title: 'Series Overview',
          description: 'The source page displays this series as the detailed translucent branch under 3M Scotchcal Graphic Film.',
          items: [
            { label: 'Source action', description: 'This product family is presented with an EXPLORE action on the source page.' },
            { label: 'Series role', description: 'It anchors the deep 3M translucent product branch.' },
            { label: '3630-20 White' },
            { label: '3630-22 Black' },
            { label: '3630-68 Rose-Mauve' },
            { label: '3630-108 Pink' },
            { label: '3630-78 Vivid Rose' },
            { label: '3630-118 Intense Magenta' },
            { label: '3630-133 Raspberry' },
            { label: '3630-128 Plum Purple' },
            { label: '3630-49 Burgundy' },
            { label: '3630-53 Cardinal Red' },
            { label: '3630-73 Dark Red' },
            { label: '3630-83 Regal Red' },
            { label: '3630-33 Red' },
            { label: '3630-43 Tomato Red' },
            { label: '3630-143 Poppy Red' },
            { label: '3630-44 Orange' },
            { label: '3630-84 Orange' },
            { label: '3630-74 Kumquat Orange' },
            { label: '3630-25 Sunflower' },
            { label: '3630-75 Marigold' },
            { label: '3630-125 Golden Yellow' },
            { label: '3630-015 Yellow' },
            { label: '3630-115 Light Lemon Yellow' },
            { label: '3630-106 Brilliant Green' },
            { label: '3630-136 Lime Green' },
            { label: '3630-146 Light Kelly Green' },
            { label: '3630-156 Vivid Green' },
            { label: '3630-116 Bright Jade Green' },
            { label: '3630-26 Green' },
            { label: '3630-76 Holly Green' },
            { label: '3630-126 Dark Emerald Green' },
            { label: '3630-246 Teal Green' },
            { label: '3630-236 Turquoise' },
            { label: '3630-87 Royal Blue' },
            { label: '3630-36 Blue' },
            { label: '3630-137 European Blue' },
            { label: '3630-157 Sultan Blue' },
            { label: '3630-97 Bristol Blue' },
            { label: '3630-167 Bright Blue' },
            { label: '3630-127 Intense Blue' },
            { label: '3630-337 Process Blue' },
            { label: '3630-147 Light European Blue' },
            { label: '3630-57 Olympic Blue' },
            { label: '3630-317 Evening Blue' },
            { label: '3630-51 Silver Grey' },
            { label: '3630-71 Shadow Grey' },
            { label: '3630-61 Slate Grey' },
            { label: '3630-69 Duranodic' },
            { label: '3630-59 Dark Brown' },
            { label: '3630-63 Rust brown' },
            { label: '3630-109 Light Rust Brown' },
            { label: '3630-129 Bronze' },
            { label: '3630-005 Ivory' },
            { label: '3630-149 Light Beige' },
            { label: '3630-131 Gold Metallic' },
            { label: '3630-141 Gold Nugget' },
            { label: '3630-121 Silver' },
          ],
        },
      ],
    },
    'scotchcal-translucent-graphic-film-2630-series': {
      title: '3M™ Scotchcal™ Translucent Graphic Film 2630 Series',
      intro:
        'The source page presents this as the companion translucent series in the 3M lineup, grouped with the 3630 product family.',
      heroImage: '/itms/img/material/promotional.jpg',
      sections: [
        {
          title: 'Series Overview',
          description: 'The 2630 series is shown as the companion translucent branch in the 3M Scotchcal portfolio.',
          items: [
            { label: 'Companion translucent series', description: 'Displayed on the 3M graphics page alongside the 3630 series.' },
          ],
        },
      ],
    },
    'economy-series': {
      title: '3M Economy Series',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/economy.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMEconomySeriesRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'Approximate visuals', description: 'The source warns that displayed colours and finishes are approximate and should be verified against the swatch folder.' }],
        },
      ],
    },
    'promotional-series': {
      title: '3M Promotional Series',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/promotional.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMPromotionalSeriesRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'Promotional Series', description: 'Displayed on the source page with the same approximate-colour notice for visuals and finishes.' }],
        },
      ],
    },
    'intermediate-series': {
      title: '3M Intermediate Series',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/intermidate.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMIntermediateSeriesRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'Intermediate Series', description: 'Displayed on the source page with the same approximate-colour notice for visuals and finishes.' }],
        },
      ],
    },
    'cast-series': {
      title: '3M Cast Series',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/cast-series.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMCastSeriesRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'Cast Series', description: 'Displayed on the source page with the same approximate-colour notice for visuals and finishes.' }],
        },
      ],
    },
    'pvc-free': {
      title: '3M PVC Free',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/pvc-free.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMPvcFreeRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'PVC Free', description: 'Displayed as the non-PVC product category on the source page.' }],
        },
      ],
    },
    others: {
      title: '3M Others',
      intro:
        'Please Note: The images, colours and finishes on screen are approximate. For the real representation of the product always check the sample or the colours folder swatch.',
      heroImage: '/itms/img/material/others.jpg',
      table: { headers: threeMSeriesTableHeaders, rows: threeMOthersRows },
      sections: [
        {
          title: 'Product Guidance',
          items: [{ label: 'Others', description: 'Displayed as the final 3M category on the source page.' }],
        },
      ],
    },
  },
  lxhausys: {
    material: {
      title: 'LX Hausys Products',
      intro: 'Lx Hausys products cover sign board materials, cut vinyl, flexible substrates, and signboard protection film for modern display and graphics applications.',
      heroImage: 'https://www.itms-india.com/img/generic/lxhausys1.jpg',
      sections: [
        {
          title: 'Sign Board',
          description: 'The source site presents LX Hausys products for sign board applications with core material families and performance grades.',
          items: [
            { label: 'Cut Vinyl', description: 'Cut graphics solution for signage and display applications.' },
            { label: 'Flexible Substrate', description: 'Printable flex material for graphics production.' },
            { label: 'Signboard Protection Film', description: 'Protection film used for outdoor signage and branded surfaces.' },
          ],
        },
      ],
      table: {
        headers: ['Code', 'Description', 'Thickness', 'Warranty'],
        rows: [
          { code: 'LC2000', description: 'Monomeric-Opaque', texture: '75µ', adhesive_type_colour: '1 Year', durability: '1 Year' },
          { code: 'LT4000', description: 'Polymeric-Translucent', texture: '90µ', adhesive_type_colour: '3 Years', durability: '3 Years' },
          { code: 'LA9000', description: 'Cast-Translucent', texture: '50µ', adhesive_type_colour: '5 Years', durability: '5 Years' },
          { code: 'LB9000', description: 'Cast-Blockout', texture: '90µ', adhesive_type_colour: '5 Years', durability: '5 Years' },
        ],
      },
    },
    'cut-vinyl': {
      title: 'LX Hausys Cut Vinyl',
      intro: 'Cut Vinyl delivers high-quality signboard film for cut graphics applications with clean edges and long-lasting adhesion.',
      heroImage: 'https://www.itms-india.com/img/material/LxHausys/cut-vinyl.jpg',
      table: {
        headers: ['Code', 'Description', 'Thickness', 'Warranty'],
        rows: [
          { code: 'LC2000', description: 'Monomeric-Opaque', thickness: '75µ', warranty: '1 Year' },
          { code: 'LT4000', description: 'Polymeric-Translucent', thickness: '90µ', warranty: '3 Years' },
          { code: 'LA9000', description: 'Cast-Translucent', thickness: '50µ', warranty: '5 Years' },
          { code: 'LB9000', description: 'Cast-Blockout', thickness: '90µ', warranty: '5 Years' },
        ],
      },
    },
    'flexible-substrate': {
      title: 'LX Hausys Flexible Substrate',
      intro: 'Flexible Substrate is designed for wide-format printing and signage applications with strong flexibility and printability.',
      heroImage: 'https://www.itms-india.com/img/material/LxHausys/flexible-substrate.jpg',
      table: {
        headers: ['Code', 'Description', 'Thickness', 'Warranty'],
        rows: [
          { code: 'Hi-Flex SP', description: 'Printable Flex', thickness: '520 GSM', warranty: '18 Months' },
          { code: 'Hi-Flex II', description: 'Cut Graphics Flex', thickness: '610 GSM', warranty: '36 Months' },
          { code: 'Lucky Flex II', description: 'Cut Graphics Flex', thickness: '750 GSM', warranty: '60 Months' },
        ],
      },
    },
    'signboard-protection-film': {
      title: 'LX Hausys Signboard Protection Film',
      intro: 'Signboard Protection Film protects outdoor signage and graphics with strong lamination performance and lasting durability.',
      heroImage: 'https://www.itms-india.com/img/material/LxHausys/signboard-protection-film.jpg',
      table: {
        headers: ['Code', 'Description', 'Thickness', 'Warranty'],
        rows: [
          { code: 'LP3912', description: 'Polymeric Lamination', thickness: '80µ', warranty: '36 Months' },
          { code: 'LPB0990/LP90990', description: 'Cast Lamination', thickness: '50µ', warranty: '60 Months' },
        ],
      },
    },
    'benif-interior-film': {
      title: 'LX Hausys Benif-Interior Film',
      intro: 'Lx Hausys interior film is designed for flat lamination and profile wrapping. Its self-adhesive treatment makes it easy to apply on flat and irregular surfaces, saving time and cost.',
      heroImage: 'https://www.itms-india.com/img/banner/benif-interior.jpg',
      applicationCards: [
        { title: 'Door', description: 'Interior film solution for door surfaces and trim.' },
        { title: 'Furniture', description: 'Decorative film for furniture surfaces and panels.' },
        { title: 'Ceiling', description: 'Architectural finish for ceiling and interior features.' },
        { title: 'Wall', description: 'Wall covering and decorative wrap applications.' },
      ],
      featureCards: [
        { title: 'Reliable Quality', description: 'Very stable when exposed to heat, humidity, or low temperature.' },
        { title: 'Fire Resistance', description: 'Certified for fire resistance across multiple international standards.' },
        { title: 'Eco Friendly', description: 'Heavy-metal free and 100% phthalate free plasticizers.' },
      ],
      discriminationCards: [
        { title: 'Volatile Organic Compounds', description: 'Below standard below 0.4 mg·m²·h.' },
        { title: 'Formaldehyde', description: 'Below standard below 0.4 mg·m²·h.' },
        { title: 'Phthalate', description: 'Non-phthalate formulation.' },
        { title: 'Heavy Metals', description: 'Below standard below 0.5 mg·kg.' },
        { title: 'Toluene', description: 'Below standard below 0.080 mg·m²·h.' },
      ],
      patternGallery: [
        { title: 'Fabric ML14 | Leather', image: 'https://www.itms-india.com/img/gallery/interior-film1.jpg' },
        { title: 'Fabric EL051 | Classic', image: 'https://www.itms-india.com/img/gallery/interior-film1.jpg' },
        { title: 'Stone ML67 | Marble', image: 'https://www.itms-india.com/img/gallery/interior-film1.jpg' },
        { title: 'Wood EW437 | Economy Wood', image: 'https://www.itms-india.com/img/gallery/interior-film1.jpg' },
      ],
      sections: [
        {
          title: 'Feature & Merit',
          items: [
            { label: 'Reliable Quality', description: 'Stable in heat, humidity, and low temperatures.' },
            { label: 'Fire Resistance', description: 'Certified for multiple regions and markets.' },
            { label: 'Eco Friendly', description: 'Heavy-metal free, phthalate free applications.' },
          ],
        },
      ],
    },
    'glass-film': {
      title: 'LX Hausys Glass Film',
      intro: 'Lx Hausys glass film delivers anti-scattering, UV-cut, scratch resistance, and privacy-protection benefits for architectural glass applications.',
      heroImage: 'https://www.itms-india.com/img/generic/windeco1.jpg',
      featureCards: [
        { title: 'Anti-Scattering', description: 'Prevents secondary accidents caused by broken glass fragments.' },
        { title: 'UV-Cut', description: 'Blocks harmful UV rays and helps protect interiors from pigmentation and aging.' },
        { title: 'Scratch Resistance', description: 'Improved surface strength with a hard coating and strong resistance to contamination.' },
        { title: 'Privacy Protection', description: 'Blocks view from outside while maintaining a clean architectural finish.' },
      ],
      table: {
        headers: ['Code', 'Pattern', 'Thickness', 'Type'],
        rows: [
          { code: 'LC5510', description: 'Deep Silver', texture: '90µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
          { code: 'LC5511', description: 'Gold Etched', texture: '90µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
          { code: 'LC5560', description: 'Silver', texture: '90µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
          { code: 'LC5570', description: 'Milky Film', texture: '90µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
          { code: 'LC5601', description: 'Dot Gradation Effect', texture: '50µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
          { code: 'LC5613', description: 'Clear Effect', texture: '50µ', adhesive_type_colour: 'Permanent-Clear', durability: '' },
        ],
      },
      sections: [
        {
          title: 'Features',
          items: [
            { label: 'Anti-Scattering', description: 'Preventing secondary accidents from broken glass.' },
            { label: 'UV-Cut', description: 'Reducing harmful UV exposure.' },
            { label: 'Scratch Resistance', description: 'Maintaining surface durability in daily conditions.' },
            { label: 'Privacy Protection', description: 'Blocking visibility from outside.' },
          ],
        },
      ],
    },
  },
  srf: {
    'coated-fabrics': {
      title: 'SRF Coated Fabrics',
      intro: 'SRF is a multi business conglomerate in the manufacture of Technical Textiles, Chemicals & Packaging Films. With headquarters in Gurugram, India, the INR 8295 Crore (FY 2021) company with a global workforce of around 7000 has operations in 4 countries — India, Thailand, South Africa & Hungary. SRF is the market leader in most of its businesses in India and also enjoys global leadership in some of its businesses. The company is equipped with state-of-the-art R&D facilities. ITMS is proudly associated with SRF as their authorised distributor for North and West India for Laminated Fabrics and Coated Fabrics.',
      heroImage: '/itms/img/material/SRF/Coated-Fabrics.png',
      sections: [
        {
          title: 'About SRF',
          description: 'SRF is positioned as a leader in technical textiles, specialty chemicals, packaging films and coated fabrics.',
          items: [
            { label: 'Technical textiles', description: 'SRF is a market leader in technical textiles and industrial yarns.' },
            { label: 'Global operations', description: 'SRF operates in India, Thailand, South Africa and Hungary.' },
            { label: 'R&D facilities', description: 'The source page highlights state-of-the-art R&D capabilities.' },
          ],
        },
        {
          title: 'Series Entry',
          items: [{ label: 'Coated Fabrics', description: 'Authorised SRF fabric category shown on the source page.' }],
        },
      ],
    },
    'laminated-fabrics': {
      title: 'SRF Laminated Fabrics',
      intro: 'SRF is a multi business conglomerate in the manufacture of Technical Textiles, Chemicals & Packaging Films. With headquarters in Gurugram, India, the INR 8295 Crore (FY 2021) company with a global workforce of around 7000 has operations in 4 countries — India, Thailand, South Africa & Hungary. SRF is the market leader in most of its businesses in India and also enjoys global leadership in some of its businesses. The company is equipped with state-of-the-art R&D facilities.',
      heroImage: '/itms/img/material/SRF/laminated-fabrics.png',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Laminated Fabrics', description: 'Authorised laminated-fabric category shown on the source page.' }],
        },
      ],
    },
  },
  vagus: {
    'printing-vinyl': {
      title: 'Vagus Printing Vinyl',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/clear-vinyl.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Printing Vinyl', description: 'Shown on the source page with Vagus product family labelling.' }],
        },
      ],
    },
    'clear-vinyl': {
      title: 'Vagus Clear Vinyl',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/premium-lamination.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Clear Vinyl', description: 'Listed as a Vagus product on the source page.' }],
        },
      ],
    },
    'premium-lamination': {
      title: 'Vagus Premium Lamination',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/one-way-vision.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Premium Lamination', description: 'Listed as a Vagus finishing product for greater print durability.' }],
        },
      ],
    },
    'one-way-vision': {
      title: 'Vagus One Way Vision',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/windowsfilm.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'One Way Vision', description: 'Shown in the source Vagus product family for window applications.' }],
        },
      ],
    },
    'window-films': {
      title: 'Vagus Window Films',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/canvas.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Window Films', description: 'Shown in the source Vagus product family for architectural and graphics applications.' }],
        },
      ],
    },
    canvas: {
      title: 'Vagus Canvas',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/backlit--fabric.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Canvas', description: 'Shown in the source Vagus product family for signage and display printing.' }],
        },
      ],
    },
    'backlit-fabric': {
      title: 'Vagus Backlit Fabric',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/translite.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Backlit Fabric', description: 'Shown in the source Vagus product family for illuminated display applications.' }],
        },
      ],
    },
    translite: {
      title: 'Vagus Translite',
      intro: 'VAGUS is a brand of quality products with value proposition for digital printing and graphics industry. VAGUS products are manufactured at finest manufacturers on researched specifications and with stringent quality control. VAGUS offers wide range of printable substrates for use in-shop branding and graphics, and is a first choice of many print houses for all their requirements.',
      heroImage: '/itms/img/material/Vagus/white-vinyl.jpg',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Translite', description: 'Shown in the source Vagus product family as a transmissive graphics material.' }],
        },
      ],
    },
  },
  inkdot: {
    'solvent-inks': {
      title: 'Inkdot Solvent Inks',
      intro: 'Inkdot offers varied range of Solvent and Eco-Solvent inks which are compatible with most advanced printing heads. Inkdot offers consistent quality at affordable prices, giving peace of mind to large format print houses.',
      heroImage: '/itms/img/material/Inkdot/Solvent.png',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Solvent Inks', description: 'Shown with CMYK imagery on the source Inkdot page.' }],
        },
      ],
    },
    'eco-solvent-inks': {
      title: 'Inkdot Eco-Solvent Inks',
      intro: 'Inkdot offers varied range of Solvent and Eco-Solvent inks which are compatible with most advanced printing heads.',
      heroImage: '/itms/img/material/Inkdot/CMYK.png',
      sections: [
        {
          title: 'Series Entry',
          items: [{ label: 'Eco-Solvent Inks', description: 'Shown on the source Inkdot page as the companion ink family.' }],
        },
      ],
    },
  },
  interone: {
    'lenticular-1-led': {
      title: 'Interone Lenticular 1-LED',
      intro: 'Interone Co., Ltd. developed in 2004 the first LED module in Korea, opening a new door to the domestic lighting market. The source page highlights the Lenticular 1-LED as a compact LED module with IP68 protection and multi-year warranty.',
      heroImage: '/itms/img/material/interone/Z3U-V05-A7.jpg',
      sections: [
        {
          title: 'Lenticular 1-LED Specifications',
          description:
            'The source page lists a single Lenticular 1-LED variant with module code, voltage, wattage, IP rating, warranty, and a downloadable data sheet.',
          items: [
            {
              label: 'Z1S-V05-a6',
              description: '12V · 0.24W · IP68 · 3 to 5 Years · Technical Data Sheet available',
            },
          ],
        },
      ],
    },
    'lenticular-3-led': {
      title: 'Interone Lenticular 3-LED',
      intro: 'Interone is striving to research and develop products that use and apply LEDs in order to open a new era in the direct and indirect lighting markets. The source Lenticular 3-LED page shows two module variants designed for IP68 outdoor applications.',
      heroImage: '/itms/img/material/interone/Z4U-V05-a6.jpg',
      sections: [
        {
          title: 'Lenticular 3-LED Specifications',
          description:
            'The source page defines two Lenticular 3-LED variants with product codes, voltage, wattage, IP rating, warranty, and downloadable data sheets.',
          items: [
            {
              label: 'Z3U-V05-a7',
              description: '12V · 1.2W · IP68 · 3 to 5 Years · Technical Data Sheet available',
            },
            {
              label: 'Z3U-V05-a4',
              description: '12V · 1.0W · IP68 · 3 to 5 Years · Technical Data Sheet available',
            },
          ],
        },
      ],
    },
    'lenticular-4-led': {
      title: 'Interone Lenticular 4-LED',
      intro: 'Part of Interone’s LED module family, the Lenticular 4-LED is presented with two module variants and detailed performance specifications for LED lighting applications.',
      heroImage: '/itms/img/material/interone/Z1S-V05-a6.jpg',
      sections: [
        {
          title: 'Lenticular 4-LED Specifications',
          description:
            'The source page lists two Lenticular 4-LED product codes with voltage, wattage, viewing angle, IP rating, warranty and technical data-sheet details.',
          items: [
            {
              label: 'Z4U-V05-a6',
              description: '12V · 2.16W · 160° · IP68 · 3 to 5 Years · Technical Data Sheet available',
            },
            {
              label: 'Z4U-V5F-a6',
              description: '12V · 1.44W · 160° · IP68 · 3 to 5 Years · Technical Data Sheet available',
            },
          ],
        },
      ],
    },
  },
};