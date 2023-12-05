const destinations = [
  {
    hideFromItinerary: true,
    name: "start",
    position: 0,
    stop: 0,
    day: 0,
    visited: false,
    details: {
      blurb:
        "Use the arrows to explore your trip, starting off with a day in Banff.",
    },
  },
  {
    day: 1,
    name: "Banff",
    position: 11.066,
    stop: 1,
    drivingInfo: {
      copy: "Head from Calgary to Banff, the birthplace of Canada’s national parks system.",
      time: "1 hr 23 min drive from Calgary",
    },
    visited: false,
    details: {
      assets: [
        {
          type: "video",
          url: "/images/cave-and-basin-national-historic-site/test-video.mp4",
        },
        {
          type: "image",
          url: "/images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-1.webp",
          altText: "Cave and Basin National Historic Site ALT",
        },
        {
          type: "image",
          url: "/images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-2.webp",
        },
        {
          type: "image",
          url: "/images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-3.webp",
        },
        {
          type: "image",
          url: "/images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-4.webp",
        },
      ],
      title: "Cave and Basin National Historic Site",
      image: "/images/cave-and-basin-national-historic-site.jpg",
      altText: "Visitor taking a photo in the Cave at the Cave and Basin",
      blurb: "Your first stop? The birthplace of Canada’s national parks.",
      description:
        "This site has held significance for Indigenous Peoples since time immemorial. Three railway workers stumbled upon it in 1883, and the events that followed resulted in Canada’s first national park. It’s now a gathering place to connect visitors to the land and share stories of conservation.",
      duration: "1 - 3 hr",
      price: "Free - $8.50 CAD",
      type: "Self-guided tour",
      links: [
        {
          text: "Cave and Basin National Historic Site",
          image: "/images/info/cave-and-basin-national-historic-site.webp",
          url: "https://www.travelalberta.com/listings/cave-and-basin-national-historic-site-1190/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://www.google.com/maps/place/311+Cave+Ave,+Banff,+AB+T1L+1K2/@51.1699163,-115.5950771,16z/data=!3m1!4b1!4m6!3m5!1s0x5370ca6b9ae405bf:0x987bb5e7c19d0a3d!8m2!3d51.1699091!4d-115.5891527!16s%2Fg%2F11bw40lcxk?entry=ttu",
          linkText: "311 Cave Avenue, Banff, AB T1L 1K2",
          external: true,
        },
      ],
      position: [-4.5575, 1.05, 2.63],
    },
  },
  {
    name: "Banff",
    position: 13.033,
    day: 1,
    stop: 2,
    description:
      "Head to Banff, where you'll enjoy great food and the beatutiful Rocky Mountains.",
    visited: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/banff-gondola/banff-gondola-1.webp",
          altText:
            "Family relaxing in a snow dome at the top of the Banff Gondola in Banff National Park",
        },
        {
          type: "image",
          url: "/images/banff-gondola/banff-gondola-2.webp",
          altText: "Banff Gondola ride",
        },
        {
          type: "image",
          url: "/images/banff-gondola/banff-gondola-3.webp",
          altText:
            "Visitor looking out over Banff National park from the top of Sulphur Mountain",
        },
        {
          type: "image",
          url: "/images/banff-gondola/banff-gondola-4.webp",
          altText: "Building at the top of the Banff Gondola",
        },
      ],
      title: "Banff Gondola",
      image: "/images/banff-gondola.webp",
      altText: "Banff Gondola",
      blurb: "An unbeatable view to end an unforgettable morning.",
      description:
        "Experience a world of adventure and beauty at the summit of Banff’s Sulphur Mountain. Exploration abounds at the gondola, from a theatre and interpretive centre inside to epic snowy views from the rooftop deck and mountain boardwalk outside.",
      duration: "1 - 3 hr",
      price: "Free - $60 CAD",
      type: "Self-guided tour",
      links: [
        {
          text: "Banff Gondola",
          image: "/images/info/banff-gondola.webp",
          altText: "Banff Gondola",
          url: "https://www.travelalberta.com/listings/banff-gondola-1055/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.google.com/?api=0&q=1+Mountain+Avenue+Banff+T1L+1B2&",
          linkText: "1 Mountain Avenue Banff T1L 1B2",
          external: true,
        },
      ],
      position: [-4.69, 1.085, 2.859],
    },
  },
  {
    name: "Banff",
    position: 15.033,
    day: 1,
    stop: 3,
    visited: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/lunch-at-sky-bistro/lunch-at-sky-bistro-1.webp",
          altText:
            "Guests dining at the Sky Bistro at the top of the Banff Gondola in Banff National Park",
        },
        {
          type: "image",
          url: "/images/lunch-at-sky-bistro/lunch-at-sky-bistro-2.webp",
          altText: "Building at the top Banff Gondola within the clouds",
        },
        {
          type: "image",
          url: "/images/lunch-at-sky-bistro/lunch-at-sky-bistro-3.webp",
          altText: "Close-up of a cocktail drink at the Banff Gondola",
        },
        {
          type: "image",
          url: "/images/lunch-at-sky-bistro/lunch-at-sky-bistro-4.webp",
          altText: "Dining in Sky Bistro at the top of Banff Gondola",
        },
      ],
      title: "Lunch at Sky Bistro",
      blurb: "Treat your tastebuds to a top-of-the-world lunch.",
      image: "/images/sky-bistro.webp",
      altText: "Dining in Sky Bistro at the top of Banff Gondola",
      description:
        "Overlooking Banff on the summit of Sulphur Mountain, Sky Bistro serves locally inspired cuisine paired with panoramic views of six Rocky Mountain ranges. Ride to the top aboard the Banff Gondola before enjoying dishes inspired by Canadian culinary traditions, made from fresh regional ingredients.",
      duration: "1 - 2 hr",
      price: "$16 - $52+ CAD",
      type: "Dining",
      links: [
        {
          text: "Sky Bistro",
          image: "/images/info/lunch-at-sky-bistro.webp",
          altText: "Close-up of a cocktail drink at the Banff Gondola",
          url: "https://www.travelalberta.com/listings/sky-bistro-6411/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/lunch-at-sky-bistro.webp",
          url: "https://maps.google.com/?api=0&q=1+Mountain+Avenue+Banff+T1L+1B2&",
          linkText: "1 Mountain Avenue Banff, AB T1L 1B2",
          external: true,
        },
      ],
      position: [-4.69, 1.13, 2.759],
    },
  },
  {
    name: "Banff",
    position: 17,
    day: 1,
    stop: 4,
    visited: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/banff-upper-hot-springs/banff-upper-hot-springs-1.webp",
          altText: "Banff Upper Hot Springs",
        },
        {
          type: "image",
          url: "/images/banff-upper-hot-springs/banff-upper-hot-springs-2.webp",
          altText: "Woman sitting in Banff Upper Hot Springs",
        },
        {
          type: "image",
          url: "/images/banff-upper-hot-springs/banff-upper-hot-springs-3.webp",
          altText:
            "Couple walking through the entrance at the Banff Upper Hot Springs",
        },
        {
          type: "image",
          url: "/images/banff-upper-hot-springs/banff-upper-hot-springs-4.webp",
          altText: "Couple enjoying the Banff Upper Hot Springs",
        },
      ],
      title: "Banff Upper Hot Springs",
      image: "/images/banff-upper-hot-springs.webp",
      altText:
        "A female visitor is enjoying the pool at the Upper Banff Hot Springs",
      blurb: "Elevate your afternoon with a mineral-rich dip.",
      description:
        "Visit Banff Upper Hot Springs on your trip to the UNESCO World Heritage Site of Banff National Park. The natural hot mineral springs are among the top attractions in the Canadian Rockies. Banff Upper Hot Springs offers a splendid historic bathhouse in Banff National Park.",
      duration: "1 - 2 hr",
      price: "Free - $8.50 CAD",
      type: "Self-guided tour",
      links: [
        {
          text: "Banff Upper Hot Springs",
          image: "/images/info/banff-upper-hot-springs.webp",
          altText:
            "A crowd of people at Banff Upper Hot Springs in Banff National Park",
          url: "https://www.travelalberta.com/listings/banff-upper-hot-springs-2035/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.google.com/?api=0&q=1+Mountain+Avenue+Banff+T1L+1B2&",
          linkText: "1 Mountain Avenue Banff, AB T1L 1B2",
          external: true,
        },
      ],
      position: [-4.63, 1.075, 2.83],
    },
  },
  {
    name: "Banff",
    position: 18.933,
    day: 1,
    stop: 5,
    visited: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/fairmont-banff-springs-hotel/fairmont-banff-springs-hotel-1.webp",
          altText:
            "Couple opening gifts outside on the patio at the Fairmont Banff Springs Hotel in Banff townsite in Banff National Park",
        },
        {
          type: "image",
          url: "/images/fairmont-banff-springs-hotel/fairmont-banff-springs-hotel-2.webp",
          altText:
            "Family decorating a huge Christmas tree inside Mt. Stephen Hall at the Fairmont Banff Springs Hotel in Banff townsite in Banff National Park",
        },
        {
          type: "image",
          url: "/images/fairmont-banff-springs-hotel/fairmont-banff-springs-hotel-3.webp",
          altText: "The Fairmont Banff Springs Hotel",
        },
        {
          type: "image",
          url: "/images/fairmont-banff-springs-hotel/fairmont-banff-springs-hotel-4.webp",
          altText:
            "A close up of a dome dining bubble at Fairmont Banff Springs Hotel",
        },
      ],
      title: "Fairmont Banff Springs Hotel",
      blurb: "Spend the night resting like Rocky Mountain royalty.",
      image: "/images/fairmont-banff-springs-hotel.jpg",
      altText:
        "Vertical shot of the Fairmont Banff Springs in Banff; surrounded by trees; the Bow River in front and Sulphur Mountain behind",
      description:
        'Located in the heart of Banff National Park, a UNESCO World Heritage Site, the world-famous Fairmont Banff Springs hotel stands as a landmark in the picturesque alpine town of Banff, Alberta. Canada\'s "Castle in the Rockies", has been providing legendary hospitality to our guests for more than 130 years.',
      duration: "Overnight",
      price: "$500+ CAD",
      type: "Accommodation",
      links: [
        {
          text: "Fairmont Banff Springs Hotel",
          image: "/images/info/fairmont-banff-springs-hotel.webp",
          url: "https://www.travelalberta.com/listings/the-fairmont-banff-springs-hotel-2084/",
          altText: "Father and son eating breakfast at the Banff Springs Hotel",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/fairmont-banff-springs-hotel.jpg",
          url: "https://maps.google.com/?api=0&q=405+Spray+Avenue+Banff+T1L+1J4&",
          linkText: "405 Spray Avenue Banff, AB T1L 1J4",
          external: true,
        },
      ],
      position: [-4.58, 1.075, 2.83],
    },
  },
  {
    name: "Banff / Lake Louise",
    position: 20.6,
    day: 2,
    hideFromItinerary: true,
    stop: 6,
    visited: false,
    drivingInfo: {
      copy: "The scenery at these world-famous turquoise lakes is picture-perfect, and there’s plenty to see and do.",
      time: "0 hr 45 min drive from Banff",
    },
    details: {
      title: null,
      blurb:
        "Begin day two in beautiful Banff and end it dining by Lake Louise.",
    },
  },
  {
    name: "Lake Louise",
    position: 22.16,
    day: 2,
    stop: 7,
    visited: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/carter-ryan-gallery/carter-ryan-gallery-1.webp",
          altText: "jason Carter, Indigenous History Month Profile",
        },
        {
          type: "image",
          url: "/images/carter-ryan-gallery/carter-ryan-gallery-2.webp",
          altText: "",
        },
        {
          type: "image",
          url: "/images/carter-ryan-gallery/carter-ryan-gallery-3.webp",
          altText: "",
        },
      ],
      blurb:
        "Get inspired on a morning stroll through contemporary Indigenous art.",
      title: "Carter-Ryan Gallery and Live Art Venue",
      image: "/images/carter-ryan-gallery.webp",
      altText: "Jason Carter, Indigenous History Month Profile",
      description:
        "With another location in Canmore, Carter-Ryan Gallery bills itself as a place where visual art and theatre coexist under one roof. Both locations are co-owned by Indigenous visual artist Jason Carter. Here you’ll find vibrant, modern paintings of animals and nature scenes, and bold soapstone carvings by day, and theatrical performances by local directors and actors by night.",
      duration: "30 min - 1 hr",
      price: "Free",
      type: "Self-guided tour",
      links: [
        {
          text: "Carter-Ryan Gallery and Live Art Venue",
          image: "/images/info/carter-ryan-gallery.webp",
          altText: "",
          url: "https://www.travelalberta.com/listings/carter-ryan-gallery-and-live-art-venue-6091/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.google.com/?api=0&q=229+Bear+Street+Banff+T1L+1C3&",
          linkText: "229 Bear Street Banff T1L 1C3",
          external: true,
        },
      ],
      position: [-4.55, 1.075, 2.83],
    },
  },
  {
    name: "Lake Louise",
    position: 26.3,
    day: 2,
    visited: false,
    stop: 8,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/johnston-canyon/johnston-canyon-1.webp",
          altText:
            "Three people walking across a bridge in the snow while winter hiking in Johnston Canyon in Banff National Park",
        },
        {
          type: "image",
          url: "/images/johnston-canyon/johnston-canyon-2.webp",
          altText:
            "A person's arms / hands holding the railing while looking over at the lower falls while winter hiking in Johnston Canyon in Banff National Park",
        },
        {
          type: "image",
          url: "/images/johnston-canyon/johnston-canyon-3.webp",
          altText:
            "A distant aerial view of a couple on the walkway while winter hiking at Johnston Canyon at night in Banff National Park",
        },
        {
          type: "image",
          url: "/images/johnston-canyon/johnston-canyon-4.webp",
          altText:
            "Ice climbers at Upper Falls in Johnston Canyon in Banff National Park",
        },
      ],
      blurb: "Discover roaring falls with a midday canyon hike.",
      title: "Johnston Canyon",
      image: "/images/johnston-canyon.webp",
      altText:
        "A couple takes a moment to pause and looking at the canyon while they are walking along the boardwalk at Johnston Canyon",
      description:
        "Banff National Park's most popular hiking destination takes you into the depths of a canyon along catwalks and amongst spectacular waterfalls. See the impressive lower falls and walk through a tunnel to get an even closer look at the powerful effects of water. An early morning start may help you avoid the crowds.",
      duration: "1 - 3 hr",
      price: "Free",
      type: "Self-guided tour",
      links: [
        {
          text: "Johnston Canyon",
          image: "/images/info/johnston-canyon.webp",
          altText: "",
          url: "https://www.travelalberta.com/listings/johnston-canyon-1199/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/u1zVn5hnk2HXhNnZA",
          linkText: "Bow Valley Pkwy, Improvement District No. 9, AB T1L 1K2",
          external: true,
        },
      ],
      position: [-4.0, 1.16, 1.88],
    },
  },
  {
    name: "Lake Louise",
    position: 31.6,
    day: 2,
    stop: 9,
    visited: false,
    hideFromItinerary: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/lake-louise-gondola/lake-louise-gondola-1.webp",
          altText: "Grizzly bear in the grass",
        },
        {
          type: "image",
          url: "/images/lake-louise-gondola/lake-louise-gondola-2.webp",
          altText:
            "Group of people at the viewing platform with views of the mountains at Lake Louise Resort in Banff National Park",
        },
        {
          type: "image",
          url: "/images/lake-louise-gondola/lake-louise-gondola-3.webp",
          altText:
            "People riding a chairlift in the summer with views of the lodge building at Lake Louise in Banff National Park",
        },
        {
          type: "image",
          url: "/images/lake-louise-gondola/lake-louise-gondola-4.webp",
          altText:
            "Couple looking at the view of the glacier above Lake Louise in Banff National Park",
        },
      ],
      blurb: "Keep an eye out for grizzlies on an afternoon ride.",
      title: "Lake Louise Gondola",
      image: "/images/lake-louise-gondola.webp",
      altText:
        "People riding a chairlift in the summer with views of the lodge building at Lake Louise in Banff National Park",
      description:
        "Lake Louise Gondola. Ascend to one of Banff National Park’s most incredible views where grizzly bears and other local wildlife are seen almost daily. From the top, at 2,088m (6,850ft) the gondola ride is only the start of your adventure. Make your way to the viewing platform for a panoramic view that will take your breath away.",
      duration: "1 - 3 hr",
      price: "Free - $1395",
      type: "Self-guided tour",
      links: [
        {
          text: "Lake Louise Gondola",
          image: "/images/info/lake-louise-gondola.webp",
          altText:
            "The log lodge building at Lake Louise Resort in the summer under a blue sky in Banff National Park",
          url: "https://www.travelalberta.com/listings/lake-louise-gondola-8558/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/DxpibBJYAUJ4vAwr9",
          linkText: "1 Whitehorn Rd, Lake Louise, AB T0L 1E0",
          external: true,
        },
      ],
      position: [-3.05, 1.1, 0.73],
    },
  },
  {
    name: "Lake Louise",
    position: 33.63,
    day: 2,
    stop: 10,
    visited: false,
    hideFromItinerary: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/fairmont-chateau-lake-louise/fairmont-chateau-lake-louise-1.webp",
          altText:
            "Fairmont Chateau Lake Louise in Banff National Park, Alberta",
        },
        {
          type: "image",
          url: "/images/fairmont-chateau-lake-louise/fairmont-chateau-lake-louise-2.webp",
          altText:
            "Group of people ice skating near the ice castle on Lake Louise in Banff National Park",
        },
        {
          type: "image",
          url: "/images/fairmont-chateau-lake-louise/fairmont-chateau-lake-louise-3.webp",
          altText:
            "Couple walking along at the Ice Magic Festival at Lake Louise in Banff National Park",
        },
        {
          type: "image",
          url: "/images/fairmont-chateau-lake-louise/fairmont-chateau-lake-louise-4.webp",
          altText:
            "One person pulling another while skating on Lake Louise with Fairmont Château Lake Louise in the background in Banff National Park",
        },
      ],
      blurb: "Sleep by the shore, nestled among mountains",
      title: "Fairmont Chateau Lake Louise",
      image: "/images/fairmont-chateau-lake-louise.webp",
      altText:
        "Aerial view of the Fairmont Chateau Lake Louise surrounded by mountains in Banff National Park",
      description:
        "On the shore of Lake Louise, surrounded by soaring mountain peaks and the majestic Victoria Glacier, sits the Fairmont Chateau Lake Louise. This spectacular mountain resort in the heart of Banff National Park and the Canadian Rockies offers elegant guest rooms, world-class dining, an award-winning spa, and an endless array of outdoor recreational activities.",
      duration: "Overnight",
      price: "$425+",
      type: "Accommodation",
      links: [
        {
          text: "Fairmont Chateau Lake Louise",
          image: "/images/info/fairmont-chateau-lake-louise.webp",
          altText: "",
          url: "https://www.travelalberta.com/listings/the-fairmont-chateau-lake-louise-2085/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.google.com/?api=0&q=111+Lake+Louise+Drive+Lake+Louise+T0L+1E0&",
          linkText: "111 Lake Louise Drive Lake Louise T0L 1E0",
          external: true,
        },
      ],
      position: [-3.2, 1.1, 0.61],
    },
  },
  {
    name: "Lake Louise",
    position: 35.6,
    day: 2,
    stop: 11,
    visited: false,
    hideFromItinerary: false,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/fairview/fairview-1.webp",
          altText:
            "Couple enjoying drinks and food at the Fairview Lounge at the Fairmont Château Lake Louise",
        },
        {
          type: "image",
          url: "/images/fairview/fairview-2.webp",
          altText:
            "A bartender creating a craft cocktail for a couple sitting at the Fairview bar at the Fairmont Château Lake Louise",
        },
        {
          type: "image",
          url: "/images/fairview/fairview-3.webp",
          altText: "",
        },
      ],
      blurb: " Wine, dine, and take in the skyline.",
      title: "Dine at Fairview",
      image: "/images/fairview.webp",
      altText:
        "Couple enjoying drinks and food at the Fairview Lounge at the Fairmont Château Lake Louise",
      description:
        "Savor the very best in contemporary Canadian cuisine at Fairview, where their talented culinary team’s deft touch allows the food to shine. Stylish décor, spectacular views, and attentive service create the perfect ambiance for a memorable dining experience at Fairview. Wine Spectator has awarded their master wine list with its “Award of Excellence”.",
      duration: "1 - 2 hr",
      price: "$$$",
      type: "Dining",
      links: [
        {
          text: "Fairview",
          image: "/images/info/fairview.webp",
          altText: "",
          url: "https://www.travelalberta.com/listings/fairview-6368/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.google.com/?api=0&q=111+Lake+Louise+Drive+Lake+Louise+T0L+1E0&",
          linkText: "111 Lake Louise Drive Lake Louise T0L 1E0",
          external: true,
        },
      ],
      position: [-3.2, 1.11, 0.57],
    },
  },
  {
    name: "Jasper",
    position: 36.54,
    day: 3,
    hideFromItinerary: true,
    stop: 12,
    visited: false,
    drivingInfo: {
      copy: "Enjoy a scenic drive to Jasper, with destinations that will take you to new heights.",
      time: "3 hr 19 min drive from Lake Louise.",
    },
    details: {
      title: null,
      blurb: "Journey through Jasper for an exciting final day.",
    },
  },
  {
    name: "Jasper",
    position: 43.3,
    day: 3,
    visited: false,
    hideFromItinerary: false,
    stop: 13,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/columbia-icefield-skywalk/columbia-icefield-skywalk-1.webp",
          altText: "People standing on the Columbia Icefield Skywalk",
        },
        {
          type: "image",
          url: "/images/columbia-icefield-skywalk/columbia-icefield-skywalk-2.webp",
          altText: "amily walking on the Columbia Icefield Skywalk",
        },
        {
          type: "image",
          url: "/images/columbia-icefield-skywalk/columbia-icefield-skywalk-3.webp",
          altText: "People standing on the Columbia Icefield Skywalk",
        },
        {
          type: "image",
          url: "/images/columbia-icefield-skywalk/columbia-icefield-skywalk-4.webp",
          altText:
            "Family standing on the Columbia Icefield Skywalk watching the sunset",
        },
      ],
      blurb: "Defy the sky with a morning stroll over Sunwapta Valley.",
      title: "Columbia Icefield Skywalk",
      image: "/images/columbia-icefield-skywalk.webp",
      altText: "People standing on the Columbia Icefield Skywalk",
      description:
        "Go beyond nature's edge and immerse yourself in an awe-inspiring interpretive experience in one of the most unique ecosystems in the world. Explore the immense powers of glaciology from a fully accessible, cliff-edge walkway that leads to a glass-floored observation platform 280 m (918 ft) above the Sunwapta Valley.",
      duration: "1 - 2 hr",
      price: "$26.65 - $41",
      type: "Self-guided tour",
      links: [
        {
          text: "Columbia Icefield Skywalk",
          image: "/images/info/columbia-icefield-skywalk.webp",
          altText:
            "Wide shot of visitors standing on the Columbia Icefield Skywalk",
          url: "https://www.travelalberta.com/listings/columbia-icefield-skywalk-1074/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/2Kxf17C4Cbf5jrsp7",
          linkText:
            "Highway 93, Icefields Pkwy, Improvement District No. 12, AB T1L 1J3",
          external: true,
        },
      ],
      position: [1.65, 1.1, -3.2],
    },
  },
  {
    name: "Jasper",
    position: 47.833,
    day: 3,
    visited: false,
    hideFromItinerary: false,
    stop: 14,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/maligne-canyon/maligne-canyon-1.webp",
          altText:
            "Women standing on a bridge in the forest over Maligne Canyon in Jasper National Park",
        },
        {
          type: "image",
          url: "/images/maligne-canyon/maligne-canyon-2.webp",
          altText:
            "A group of three friends with head-lamps stand at the base of the canyon while exploring Maligne Canyon on an ice walk in Jasper National Park",
        },
        {
          type: "image",
          url: "/images/maligne-canyon/maligne-canyon-3.webp",
          altText:
            "A distant shot of a group touring Maligne Canyon, surrounded by cool canyon formations, while ice walking and hiking in Jasper National Park",
        },
        {
          type: "image",
          url: "/images/maligne-canyon/maligne-canyon-4.webp",
          altText:
            "Two women pointing to an ice structure while ice hiking in Maligne Canyon in Jasper National Park",
        },
      ],
      blurb: "Take a lunchtime trip through a towering gorge.",
      title: "Maligne Canyon",
      image: "/images/maligne-canyon.webp",
      altText:
        "Two young girls stop at a lookout by a waterfall while exploring Maligne Canyon in Jasper National Park",
      description:
        "Turquoise, glacial waters, and startling canyon walls grow ever more impressive along this short trail. Multiple bridges span the narrow gorge, crossing several times for spine-tingling views of the river below. Watch for fuchsia fireweed and mountain bluebirds in a landscape shaped by fire, erosion, and mountain building.",
      duration: "15 min - 3 hr",
      price: "Free",
      type: "Self-guided tour",
      links: [
        {
          text: "Maligne Canyon",
          image: "/images/info/maligne-canyon.webp",
          altText:
            "A group of friends winter hike and explore Maligne Canyon in Jasper National Park",
          url: "https://www.travelalberta.com/listings/maligne-canyon-1206/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/biUzBE2gvjggayMZ7",
          linkText: "Maligne Canyon, Jasper, AB T0E 1E0",
          external: true,
        },
      ],
      position: [5.4, 1.05, -5.6],
    },
  },
  {
    name: "Jasper",
    position: 49.76,
    day: 3,
    visited: false,
    hideFromItinerary: false,
    stop: 15,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/jasper-sky-tram/jasper-sky-tram-1.webp",
          altText: "Couple hiking the trails on top Whistlers Mountain",
        },
        {
          type: "image",
          url: "/images/jasper-sky-tram/jasper-sky-tram-2.webp",
          altText: "Couple riding the Jasper Skytram",
        },
        {
          type: "image",
          url: "/images/jasper-sky-tram/jasper-sky-tram-3.webp",
          altText:
            "Young girl looking at the view on top of the Jasper Skytram",
        },
        {
          type: "image",
          url: "/images/jasper-sky-tram/jasper-sky-tram-4.webp",
          altText:
            "Visitors looking down at the town of Jasper from the top of the Jasper SkyTram",
        },
      ],
      blurb: "Soar up Whistlers Mountain for an afternoon hike.",
      title: "Jasper SkyTram",
      image: "/images/jasper-sky-tram.webp",
      altText: "Young girl looking at the view on top of the Jasper Skytram",
      description:
        "The Jasper SkyTram whisks you up Whistlers Mountain to an elevation of 2,263 m, providing stunning vistas of mountain ranges. On a clear day, you can even see the white pyramid of Mount Robson in nearby British Columbia. Interpretive panels explain the alpine environment, and a 1.4 km hiking trail leads you to the summit of the mountain.",
      duration: "1 - 2 hr",
      price: "Free - $59.95",
      type: "Self-guided tour",
      links: [
        {
          text: "Jasper SkyTram",
          image: "/images/info/jasper-sky-tram.webp",
          altText: "Visitors boarding the Jasper Skytram",
          url: "https://www.travelalberta.com/listings/jasper-skytram-1164/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/3oj8ncVKtT5HFmrD9",
          linkText: "Whistlers Rd, Jasper, AB T0E 1E0",
          external: true,
        },
      ],
      position: [5.0, 1.05, -6.0],
    },
  },
  {
    name: "Jasper",
    position: 51.633,
    day: 3,
    visited: false,
    hideFromItinerary: false,
    stop: 16,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/fairmont-jasper-park-lodge/fairmont-jasper-park-lodge-1.webp",
          altText: "People golfing at The Fairmont Jasper Park Lodge Golf Club",
        },
        {
          type: "image",
          url: "/images/fairmont-jasper-park-lodge/fairmont-jasper-park-lodge-2.webp",
          altText:
            "Family swimming in the outdoor pool at night at the Fairmont Jasper Park Lodge",
        },
        {
          type: "image",
          url: "/images/fairmont-jasper-park-lodge/fairmont-jasper-park-lodge-3.webp",
          altText:
            "Couple walking on the dock at the Fairmont Jasper Park Lodge",
        },
        {
          type: "image",
          url: "/images/fairmont-jasper-park-lodge/fairmont-jasper-park-lodge-4.webp",
          altText:
            "A man looking at Hector Lake at the Fairmont Jasper Park Lodge in Alberta",
        },
      ],
      blurb: "Cuddle up in your choice of cozy log cabin.",
      title: "Fairmont Jasper Park Lodge",
      image: "/images/fairmont-jasper-park-lodge.webp",
      altText: "People golfing at The Fairmont Jasper Park Lodge Golf Club",
      description:
        "Spread out over 700 acres, this year-round luxury mountain resort wraps around the shores of pristine Lac Beauvert and Canada's #1 Golf Resort. Choose from private Signature Cabins (featuring your own kitchen, living space, patio, and more) or one of their many quaint cabin-style rooms throughout the expansive property.",
      duration: "Overnight",
      price: "$479+",
      type: "Accommodation",
      links: [
        {
          text: "Fairmont Jasper Park Lodge",
          image: "/images/info/fairmont-jasper-park-lodge.webp",
          altText:
            "Night shot of the outdoor swimming pool at The Fairmont Jasper Park Lodge in Jasper National Park Alberta",
          url: "https://www.travelalberta.com/listings/fairmont-jasper-park-lodge-1153/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/6GFMdsGrhxsdF7a96",
          linkText: "1 Old Lodge Road Jasper, AB T0E 1E0",
          external: true,
        },
      ],
      position: [5.35, 1.08, -5.7],
    },
  },
  {
    name: "Jasper",
    position: 53.5,
    day: 3,
    visited: false,
    stop: 17,
    details: {
      assets: [
        {
          type: "image",
          url: "/images/jasper-planetarium/jasper-planetarium-1.webp",
          altText: "Young couple viewing projected sky in planetarium",
        },
        {
          type: "image",
          url: "/images/jasper-planetarium/jasper-planetarium-2.webp",
          altText: "Young couple outside looking skyward, telescopes on ground",
        },
        {
          type: "image",
          url: "/images/jasper-planetarium/jasper-planetarium-3.webp",
          altText:
            "Jasper Planetarium, displaying the constellations and aurora",
        },
        {
          type: "image",
          url: "/images/jasper-planetarium/jasper-planetarium-4.webp",
          altText:
            "Visitors at the Jasper Planetarium, displaying the constellations and Aurora",
        },
      ],
      blurb: "Spend your last night exploring the stars.",
      title: "Jasper Planetarium",
      image: "/images/jasper-planetarium.webp",
      altText:
        "Visitors at the Jasper Planetarium, displaying the constellations and Aurora",
      description:
        "Enter The Jasper Planetarium's 40-seat domed planetarium theatre and tour the world's largest accessible dark sky preserve with a live guide during this interactive, world-exclusive, indoor Planetarium Experience. Or sign up for the full tour which starts in the planetarium, then head outside for the chance to tour the largest telescope in the Rockies.",
      duration: "45 min - 3 hr",
      price: "$15 - $89",
      type: "Self-guided tour (and Guided tour)",
      links: [
        {
          text: "Jasper Planetarium",
          image: "/images/info/jasper-planetarium.webp",
          altText: "Young couple viewing projected sky in planetarium",
          url: "https://www.travelalberta.com/listings/jasper-planetarium-1184/",
          linkText: "View More Details",
          external: false,
        },
        {
          text: "View on Google Maps",
          // image: "/images/maps/cave-and-basin-national-historic-site.jpg",
          url: "https://maps.app.goo.gl/VBssinqmJ1V2tpUD8",
          linkText: "1 Old Lodge Road Jasper, AB T0E 1E0",
          external: true,
        },
      ],
      position: [5.4, 1.06, -5.65],
    },
  },
];

export default destinations;