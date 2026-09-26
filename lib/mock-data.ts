import type { AgentProfile } from "@/types/agent";
import type { ArticleItem, ArticleCategory } from "@/types/article";
import type { PropertyDetail, PropertyFilters } from "@/types/property";
import type { ProjectItem } from "@/types/project";

export const mockAgents: AgentProfile[] = [
  {
    id: "maya-pradana",
    name: "Maya Pradana",
    role: "Senior Property Consultant",
    region: "Jakarta Selatan",
    initials: "MP",
    office: "Eagletree Jakarta Selatan",
    whatsapp: "6281212345678",
    phone: "+6281212345678",
    licenseNumber: "AREBI-0982-1234",
    joinedYear: 2019,
    rating: 4.9,
    transactionCount: 45,
    bio: "Maya adalah konsultan properti senior dengan pengalaman lebih dari 5 tahun di area Jakarta Selatan. Memiliki spesialisasi pada rumah mewah dan apartemen premium di kawasan CBD.",
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "raka-wijaya",
    name: "Raka Wijaya",
    role: "Senior Property Consultant",
    region: "Tangerang Selatan & BSD",
    initials: "RW",
    office: "Eagletree Tangerang Selatan",
    whatsapp: "6281398765432",
    phone: "+6281398765432",
    licenseNumber: "AREBI-1029-5678",
    joinedYear: 2020,
    rating: 4.8,
    transactionCount: 32,
    bio: "Berpengalaman dalam penjualan residensial di kawasan kota mandiri BSD City dan Alam Sutera. Raka sangat memahami tren pasar hunian keluarga muda.",
  },
  {
    id: "sari-utama",
    name: "Sari Utama",
    role: "Luxury Villa Specialist",
    region: "Bali & Beyond",
    initials: "SU",
    office: "Eagletree Bali",
    whatsapp: "6281555512345",
    phone: "+6281555512345",
    licenseNumber: "AREBI-0543-9012",
    joinedYear: 2018,
    rating: 5.0,
    transactionCount: 68,
    bio: "Spesialis properti liburan dan villa eksklusif di Bali. Sari banyak membantu ekspatriat dan investor luar negeri dalam mencari aset properti terbaik.",
    socialLinks: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "hendra-kusuma",
    name: "Hendra Kusuma",
    role: "Commercial & Land Advisor",
    region: "Bandung & Jawa Barat",
    initials: "HK",
    office: "Eagletree Bandung",
    whatsapp: "6281809876543",
    phone: "+6281809876543",
    licenseNumber: "AREBI-0765-3456",
    joinedYear: 2021,
    rating: 4.7,
    transactionCount: 24,
    bio: "Fokus pada aset komersial, pergudangan, dan tanah kavling di wilayah Jawa Barat. Hendra memiliki jaringan luas dengan developer lokal.",
  },
];

export const mockProjects: ProjectItem[] = [
  {
    id: "griya-asri-residence",
    slug: "griya-asri-residence",
    title: "Griya Asri Residence",
    developer: "PT Cipta Bangun Nusantara",
    image: {
      src: "/property-mangrove-house.jpg",
      alt: "Fasad Griya Asri Residence",
    },
    gallery: [
      { src: "/property-mangrove-house.jpg", alt: "Fasad depan" },
      { src: "/property-senja-residence.jpg", alt: "Taman bermain" },
    ],
    location: {
      city: "Tangerang Selatan",
      district: "Serpong",
      fullAddress: "Jl. Letnan Sutopo, Serpong, Tangerang Selatan",
    },
    status: "Launching Soon",
    startingPrice: {
      amount: 850000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["Tipe 36/60", "Tipe 45/72", "Tipe 60/90"],
    facilities: ["One Gate System", "Taman Bermain Anak", "Keamanan 24 Jam", "Clubhouse", "Kolam Renang"],
    specifications: {
      totalUnits: 150,
      landAreaHectares: 2.5,
      handoverYear: 2026,
      certificate: "SHM",
    },
    description: "Hunian modern minimalis dengan konsep green living di jantung kota satelit Serpong.",
    longDescription: "Griya Asri Residence merupakan proyek perumahan eksklusif terbaru di Serpong yang mengedepankan gaya hidup selaras dengan alam. Dikembangkan oleh PT Cipta Bangun Nusantara, kawasan ini didesain dengan konsep green living modern, menawarkan taman-taman asri, sirkulasi udara optimal di setiap unit, serta fasilitas pendukung yang komprehensif bagi keluarga muda dinamis.",
  },
  {
    id: "the-summit-apartments",
    slug: "the-summit-apartments",
    title: "The Summit Apartments",
    developer: "Mega Karya Land",
    image: {
      src: "/property-kayu-apartment.jpg",
      alt: "Render The Summit Apartments",
    },
    gallery: [
      { src: "/property-kayu-apartment.jpg", alt: "Lobi utama" },
      { src: "/property-bukit-villa.jpg", alt: "Kolam renang podium" },
    ],
    location: {
      city: "Jakarta Selatan",
      district: "Kuningan",
      fullAddress: "Kawasan Mega Kuningan, Jakarta Selatan",
    },
    status: "Under Construction",
    startingPrice: {
      amount: 1500000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["Studio", "1 BR", "2 BR", "3 BR Premium"],
    facilities: ["Infinity Pool", "Sky Lounge", "Fitness Center", "Co-working Space", "Direct Mall Access"],
    specifications: {
      totalUnits: 450,
      landAreaHectares: 1.2,
      handoverYear: 2025,
      certificate: "Strata Title (HGB)",
    },
    description: "Apartemen premium dengan fasilitas gaya hidup bintang lima di pusat bisnis Mega Kuningan.",
    longDescription: "Berada tepat di urat nadi bisnis Jakarta, The Summit Apartments mendefinisikan ulang kemewahan hunian vertikal. Dirancang oleh firma arsitek internasional, menara apartemen ini menghadirkan perpaduan estetika modern dan kepraktisan tanpa batas. Fasilitas lengkap dari kolam renang infinity hingga sky lounge menyajikan pengalaman hidup terbaik bagi profesional urban.",
  },
  {
    id: "pesona-bukit-raya",
    slug: "pesona-bukit-raya",
    title: "Pesona Bukit Raya",
    developer: "Nirwana Group",
    image: {
      src: "/property-bukit-villa.jpg",
      alt: "Pemandangan Pesona Bukit Raya",
    },
    gallery: [
      { src: "/property-bukit-villa.jpg", alt: "Area pegunungan" },
      { src: "/property-arsana-house.jpg", alt: "Clubhouse" },
    ],
    location: {
      city: "Bogor",
      district: "Sentul",
      fullAddress: "Kawasan Sentul Selatan, Bogor",
    },
    status: "Ready to Handover",
    startingPrice: {
      amount: 2200000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["Tipe 90/120", "Tipe 120/150", "Kavling Premium"],
    facilities: ["Golf Course Access", "Mountain View", "Equestrian Club", "Resort Style Pool", "Trek Sepeda"],
    specifications: {
      totalUnits: 85,
      landAreaHectares: 5.0,
      handoverYear: 2024,
      certificate: "SHM",
    },
    description: "Kawasan resort residensial mewah dengan pemandangan langsung ke Gunung Salak.",
    longDescription: "Pesona Bukit Raya adalah jawaban bagi mereka yang mencari pelarian dari hiruk pikuk kota tanpa kehilangan kemewahan. Dikelilingi panorama Gunung Salak yang memukau, setiap hunian dalam klaster ini dirancang dengan jendela-jendela besar untuk memaksimalkan pandangan dan masuknya udara pegunungan yang segar. Tinggal di sini berarti setiap hari terasa seperti liburan eksklusif.",
  },
  {
    id: "neo-soho-suites",
    slug: "neo-soho-suites",
    title: "Neo Soho Suites",
    developer: "Podomoro Land",
    image: {
      src: "/property-arsana-house.jpg",
      alt: "Desain interior SOHO",
    },
    gallery: [
      { src: "/property-arsana-house.jpg", alt: "Desain ruang kerja" },
      { src: "/property-kayu-apartment.jpg", alt: "Area komunal" },
    ],
    location: {
      city: "Jakarta Barat",
      district: "Grogol",
      fullAddress: "Podomoro City, Grogol, Jakarta Barat",
    },
    status: "Ready to Handover",
    startingPrice: {
      amount: 2800000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["SOHO 2 Lantai", "SOHO Corner"],
    facilities: ["Dedicated Office Lobby", "High-speed Internet Ready", "Meeting Rooms", "Gym", "Terhubung dengan Mall"],
    specifications: {
      totalUnits: 300,
      landAreaHectares: 1.5,
      handoverYear: 2024,
      certificate: "Strata Title (HGB)",
    },
    description: "Konsep hunian cerdas Small Office Home Office (SOHO) terintegrasi dengan mall megah di Jakarta Barat.",
    longDescription: "Merespon tren bekerja dari rumah (WFH) dan meningkatnya wirausahawan muda, Neo Soho Suites menawarkan solusi sempurna yang menggabungkan kantor profesional dengan kenyamanan rumah. Desain dua lantai (loft) memberikan batas yang jelas antara area kerja di bawah dan area privat di atas, menciptakan efisiensi maksimal dalam satu ruang yang sama.",
  },
  {
    id: "bali-breeze-villas",
    slug: "bali-breeze-villas",
    title: "Bali Breeze Villas",
    developer: "Dewata Property",
    image: {
      src: "/property-bukit-villa.jpg",
      alt: "Tampilan Bali Breeze Villas",
    },
    gallery: [
      { src: "/property-bukit-villa.jpg", alt: "Kolam renang pribadi" },
      { src: "/property-mangrove-house.jpg", alt: "Ruang tamu semi outdoor" },
    ],
    location: {
      city: "Bali",
      district: "Canggu",
      fullAddress: "Jl. Pantai Berawa, Canggu, Bali",
    },
    status: "Under Construction",
    startingPrice: {
      amount: 4500000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["2 BR Villa", "3 BR Villa", "4 BR Luxury Villa"],
    facilities: ["Private Pool", "Yoga Deck", "Smart Home Integration", "Villa Management Service", "Keamanan 24 Jam"],
    specifications: {
      totalUnits: 40,
      landAreaHectares: 2.0,
      handoverYear: 2025,
      certificate: "SHM / Hak Pakai",
    },
    description: "Kompleks villa premium di Canggu yang menawarkan perpaduan estetika arsitektur tropis kontemporer.",
    longDescription: "Bali Breeze Villas menangkap esensi kehidupan pulau modern. Berjarak hanya beberapa menit dari pantai-pantai terbaik dan kafe trendi di Canggu, villa-villa ini dirancang khusus untuk kenyamanan jangka panjang maupun potensi investasi sewa yang menguntungkan. Material lokal berkualitas tinggi dipadukan dengan desain kontemporer menghasilkan ruang hidup yang estetik dan tenang.",
  },
  {
    id: "surabaya-bay-city",
    slug: "surabaya-bay-city",
    title: "Surabaya Bay City",
    developer: "Pakuwon Jati",
    image: {
      src: "/property-senja-residence.jpg",
      alt: "Kawasan superblock Surabaya Bay",
    },
    gallery: [
      { src: "/property-senja-residence.jpg", alt: "Tampak depan menara apartemen" },
      { src: "/property-arsana-house.jpg", alt: "Area komersial terbuka" },
    ],
    location: {
      city: "Surabaya",
      district: "Kenjeran",
      fullAddress: "Kawasan Pesisir Kenjeran, Surabaya Timur",
    },
    status: "Launching Soon",
    startingPrice: {
      amount: 950000000,
      currency: "IDR",
    },
    unitTypesAvailable: ["Studio", "1 BR", "2 BR", "Townhouse"],
    facilities: ["Marina Bay View", "Waterfront Promenade", "Lifestyle Mall", "Kolam Renang Tematik", "Hotel Berbintang"],
    specifications: {
      totalUnits: 800,
      landAreaHectares: 8.5,
      handoverYear: 2027,
      certificate: "Strata Title (HGB)",
    },
    description: "Proyek superblok terpadu (mixed-use) pertama di tepi laut Surabaya yang menawarkan gaya hidup pesisir modern.",
    longDescription: "Sebagai ikon baru di timur Jawa, Surabaya Bay City membawa konsep waterfront living yang belum pernah ada sebelumnya. Mengintegrasikan menara apartemen mewah, pusat perbelanjaan, area komersial, dan ruang publik terbuka yang langsung berhadapan dengan laut. Proyek ambisius ini dirancang untuk menjadi destinasi mandiri yang memenuhi segala kebutuhan penghuninya.",
  },
];

export const mockProperties: PropertyDetail[] = [
  {
    id: "mangrove-house",
    slug: "mangrove-house",
    href: "/properties/mangrove-house",
    title: "Mangrove House",
    image: {
      src: "/property-mangrove-house.jpg",
      alt: "Rumah modern dengan aksen kayu tropis di kawasan hijau Bintaro",
    },
    location: "Bintaro, Tangerang Selatan",
    address: "Kawasan Bintaro Jaya Sektor 9, Tangerang Selatan",
    price: { amount: 2850000000, currency: "IDR" },
    type: "House",
    status: "Featured",
    certificate: "SHM - Sertifikat Hak Milik",
    yearBuilt: 2023,
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      buildingAreaSqm: 240,
      landAreaSqm: 200,
      floors: 2,
      parking: 2,
      electricityWatts: 3500,
      furnishing: "Semi Furnished",
      facing: "Utara",
    },
    facilities: [
      "Smart Home System",
      "Private Garden",
      "Carport 2 Mobil",
      "Keamanan 24 Jam",
      "One Gate System",
      "Dekat Stasiun KRL",
      "Area Servis Terpisah",
    ],
    description: "Rumah kontemporer bernuansa tropis dengan pencahayaan alami yang melimpah dan tata ruang terbuka.",
    longDescription: "Mangrove House dirancang untuk keluarga yang menghargai ketenangan dan kehangatan ruang. Memadukan fasad kayu ulin dengan bukaan kaca tinggi, hunian ini menghadirkan sirkulasi udara silang yang optimal dan pemandangan hijau ke taman privat. Terletak di sektor prestisius Bintaro dengan akses mudah ke tol lingkar luar, sekolah internasional, dan pusat gaya hidup.",
    images: [
      { src: "/property-mangrove-house.jpg", alt: "Fasad depan Mangrove House", caption: "Fasad depan dengan aksen kayu alami" },
      { src: "/property-senja-residence.jpg", alt: "Ruang tamu luas", caption: "Ruang keluarga berkonsep open-space" },
      { src: "/property-kayu-apartment.jpg", alt: "Dapur modern", caption: "Area dapur bersih dengan kitchen island" },
      { src: "/property-bukit-villa.jpg", alt: "Taman belakang privat", caption: "Inner courtyard dan area bersantai" },
    ],
    agent: mockAgents[0],
  },
  {
    id: "senja-residence",
    slug: "senja-residence",
    href: "/properties/senja-residence",
    title: "Senja Residence",
    image: {
      src: "/property-senja-residence.jpg",
      alt: "Hunian modern mewah dengan fasad batu alam di Cilandak",
    },
    location: "Cilandak, Jakarta Selatan",
    address: "Jl. Cilandak Tengah Raya, Cilandak, Jakarta Selatan",
    price: { amount: 4200000000, currency: "IDR" },
    type: "House",
    status: "New listing",
    certificate: "SHM - Sertifikat Hak Milik",
    yearBuilt: 2024,
    specifications: {
      bedrooms: 5,
      bathrooms: 4,
      buildingAreaSqm: 310,
      landAreaSqm: 260,
      floors: 2,
      parking: 3,
      electricityWatts: 5500,
      furnishing: "Furnished",
      facing: "Selatan",
    },
    facilities: [
      "Private Plunge Pool",
      "Solar Panel Ready",
      "Dry & Wet Kitchen",
      "Garasi & Carport",
      "CCTV 24 Jam",
      "Walk-in Closet",
      "Akses Cepat MRT Fatmawati",
    ],
    description: "Arsitektur modern tropis premium dengan kolam renang privat di jantung Jakarta Selatan.",
    longDescription: "Senja Residence merefleksikan kemewahan yang bersahaja. Berada di lingkungan perumahan eksklusif yang tenang di Cilandak, rumah ini menyajikan ruang tamu berplafon ganda (double-height ceiling) yang megah, kamar tidur utama dengan balkon pribadi menghadap kolam, serta material marmer impor pilihan.",
    images: [
      { src: "/property-senja-residence.jpg", alt: "Fasad Senja Residence", caption: "Arsitektur modern dengan sentuhan batu alam" },
      { src: "/property-mangrove-house.jpg", alt: "Pintu masuk utama", caption: "Foyer berkelas dengan pintu solid wood" },
      { src: "/property-bukit-villa.jpg", alt: "Kolam renang pribadi", caption: "Private pool dan teras samping" },
      { src: "/property-kayu-apartment.jpg", alt: "Interior ruang keluarga", caption: "Living area dengan marmer elegan" },
    ],
    agent: mockAgents[1],
  },
  {
    id: "kayu-apartment",
    slug: "kayu-apartment",
    href: "/properties/kayu-apartment",
    title: "Kayu Apartment",
    image: {
      src: "/property-kayu-apartment.jpg",
      alt: "Apartemen elegan bernuansa kayu di segitiga emas Kuningan",
    },
    location: "Kuningan, Jakarta Selatan",
    address: "Kawasan Rasuna Epicentrum, Kuningan, Jakarta Selatan",
    price: { amount: 1850000000, currency: "IDR" },
    type: "Apartment",
    status: "For sale",
    certificate: "Strata Title (HGB)",
    yearBuilt: 2022,
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      buildingAreaSqm: 96,
      floors: 1,
      parking: 1,
      electricityWatts: 3500,
      furnishing: "Furnished",
      facing: "Timur",
    },
    facilities: [
      "Infinity Pool",
      "Fitness Center & Sauna",
      "Sky Lounge",
      "Access Card Terpadu",
      "Basement Parking",
      "Concierge 24 Jam",
      "Dekat Halte LRT Rasuna",
    ],
    description: "Apartemen modern dengan interior Japandi hangat di tengah distrik bisnis utama Kuningan.",
    longDescription: "Kayu Apartment adalah sanctuary ideal bagi profesional urban. Terletak di lantai menengah dengan pemandangan cakrawala kota yang spektakuler, unit 2 kamar tidur ini telah dirombak dengan interior custom bernuansa kayu oak alami yang menenangkan setelah hari kerja yang padat.",
    images: [
      { src: "/property-kayu-apartment.jpg", alt: "Living area Kayu Apartment", caption: "Interior Japandi yang lapang dan terang" },
      { src: "/property-senja-residence.jpg", alt: "Kamar tidur utama", caption: "Master bedroom dengan built-in wardrobe" },
      { src: "/property-bukit-villa.jpg", alt: "Balkon pemandangan kota", caption: "Balkon privat menghadap city skyline" },
      { src: "/property-mangrove-house.jpg", alt: "Lobi apartemen", caption: "Lobi penerima tamu yang prestisius" },
    ],
    agent: mockAgents[0],
  },
  {
    id: "bukit-villa",
    slug: "bukit-villa",
    href: "/properties/bukit-villa",
    title: "Bukit Villa",
    image: {
      src: "/property-bukit-villa.jpg",
      alt: "Vila peristirahatan dengan kolam renang di perbukitan Ubud",
    },
    location: "Ubud, Bali",
    address: "Jl. Raya Sayan, Ubud, Gianyar, Bali",
    price: { amount: 65000000, currency: "IDR", period: "month" },
    type: "Villa",
    status: "For rent",
    certificate: "Hak Sewa / Leasehold",
    yearBuilt: 2021,
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      buildingAreaSqm: 220,
      landAreaSqm: 450,
      floors: 1,
      parking: 2,
      electricityWatts: 7700,
      furnishing: "Furnished",
      facing: "Barat",
    },
    facilities: [
      "Private Swimming Pool",
      "Panoramic Valley View",
      "Open-air Living Pavilion",
      "High-speed Fiber Internet",
      "Daily Housekeeping Ready",
      "Yoga Shala Deck",
      "Fully Equipped Kitchen",
    ],
    description: "Vila peristirahatan tropis dengan kolam renang dan pemandangan lembah hijau yang tenang di Ubud.",
    longDescription: "Meresapi irama hidup Bali yang syahdu di Bukit Villa. Properti ini dibangun dengan material batu andesit lokal dan kayu jati daur ulang, menyatu harmonis dengan kontur lembah Sungai Ayung. Sangat tepat untuk ekspatriat maupun keluarga yang mencari tempat tinggal jangka menengah hingga panjang dengan kedamaian total.",
    images: [
      { src: "/property-bukit-villa.jpg", alt: "Kolam renang Bukit Villa", caption: "Private pool berlatar lembah tropis" },
      { src: "/property-mangrove-house.jpg", alt: "Paviliun terbuka", caption: "Living room terbuka berangin sejuk" },
      { src: "/property-senja-residence.jpg", alt: "Kamar tidur suite", caption: "Kamar tidur dengan kamar mandi semi-outdoor" },
      { src: "/property-kayu-apartment.jpg", alt: "Dapur dan bar", caption: "Dapur kayu jati dengan peralatan lengkap" },
    ],
    agent: mockAgents[2],
  },
  {
    id: "arsana-house",
    slug: "arsana-house",
    href: "/properties/arsana-house",
    title: "Arsana House",
    image: {
      src: "/property-arsana-house.jpg",
      alt: "Rumah minimalis putih dengan taman depan asri di Surabaya Barat",
    },
    location: "Surabaya Barat, Surabaya",
    address: "Citraland Bukit Golf International, Surabaya Barat",
    price: { amount: 1950000000, currency: "IDR" },
    type: "House",
    status: "For sale",
    certificate: "SHM - Sertifikat Hak Milik",
    yearBuilt: 2023,
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      buildingAreaSqm: 205,
      landAreaSqm: 180,
      floors: 2,
      parking: 2,
      electricityWatts: 3500,
      furnishing: "Semi Furnished",
      facing: "Timur",
    },
    facilities: [
      "Clubhouse Access",
      "Children Playground",
      "Underground Utility Cables",
      "24-Hour Security Patrol",
      "Jogging Track",
      "Dekat Lapangan Golf",
    ],
    description: "Hunian minimalis fungsional di kawasan mandiri paling prestisius di Surabaya Barat.",
    longDescription: "Arsana House menawarkan keseimbangan hidup sempurna di Surabaya Barat. Tata ruang efisien memaksimalkan pencahayaan alami di setiap sudut ruangan. Lingkungan perumahan asri bebas polusi dengan fasilitas kota mandiri terlengkap mulai dari rumah sakit berstandar internasional, sekolah ternama, hingga pusat perbelanjaan.",
    images: [
      { src: "/property-arsana-house.jpg", alt: "Fasad Arsana House", caption: "Gaya arsitektur Skandinavia minimalis" },
      { src: "/property-senja-residence.jpg", alt: "Ruang makan dan keluarga", caption: "Area komunal terbuka ramah anak" },
      { src: "/property-kayu-apartment.jpg", alt: "Kamar tidur anak", caption: "Kamar tidur kedua dengan pencahayaan baik" },
      { src: "/property-mangrove-house.jpg", alt: "Carport dan taman", caption: "Taman depan yang terawat apik" },
    ],
    agent: mockAgents[1],
  },
  {
    id: "emerald-terrace",
    slug: "emerald-terrace",
    href: "/properties/emerald-terrace",
    title: "Emerald Terrace",
    image: {
      src: "/property-senja-residence.jpg",
      alt: "Rumah 2 lantai modern tropis di cluster eksklusif BSD City",
    },
    location: "BSD City, Tangerang Selatan",
    address: "The Eminent, BSD City, Tangerang Selatan",
    price: { amount: 3400000000, currency: "IDR" },
    type: "House",
    status: "Featured",
    certificate: "SHM - Sertifikat Hak Milik",
    yearBuilt: 2024,
    specifications: {
      bedrooms: 4,
      bathrooms: 4,
      buildingAreaSqm: 265,
      landAreaSqm: 220,
      floors: 2,
      parking: 2,
      electricityWatts: 4400,
      furnishing: "Unfurnished",
      facing: "Utara",
    },
    facilities: [
      "Olympic Size Pool (Clubhouse)",
      "Solar Water Heater",
      "Smart Door Lock",
      "Security Card Access",
      "Dekat ICE BSD & Aeon Mall",
      "Taman Belakang Luas",
    ],
    description: "Hunian baru bernilai investasi tinggi dengan akses prima ke tol Serpong-Balaraja.",
    longDescription: "Emerald Terrace berdiri kokoh di lokasi paling berkembang di BSD City. Dikelilingi ruang hijau asri dengan konsep eco-living yang matang. Spesifikasi premium mencakup lantai granite tile 80x80, kusen aluminium powder coating, dan instalasi pipa air panas siap pakai di seluruh kamar mandi.",
    images: [
      { src: "/property-senja-residence.jpg", alt: "Fasad depan Emerald Terrace", caption: "Tampak depan elegan dengan pencahayaan malam" },
      { src: "/property-mangrove-house.jpg", alt: "Ruang tamu megah", caption: "Plapon tinggi memberikan kesan lega" },
      { src: "/property-kayu-apartment.jpg", alt: "Area pantry", caption: "Persiapan dapur modern dan estetik" },
      { src: "/property-arsana-house.jpg", alt: "Balkon lantai dua", caption: "Pemandangan asri dari lantai atas" },
    ],
    agent: mockAgents[1],
  },
  {
    id: "skyline-penthouse",
    slug: "skyline-penthouse",
    href: "/properties/skyline-penthouse",
    title: "Skyline Penthouse SCBD",
    image: {
      src: "/property-kayu-apartment.jpg",
      alt: "Penthouse mewah dengan pemandangan 360 derajat Jakarta di SCBD",
    },
    location: "SCBD, Jakarta Selatan",
    address: "Kawasan Niaga Terpadu Sudirman Lot 8, Jakarta Selatan",
    price: { amount: 8500000000, currency: "IDR" },
    type: "Apartment",
    status: "Featured",
    certificate: "Strata Title (Hak Milik)",
    yearBuilt: 2023,
    specifications: {
      bedrooms: 3,
      bathrooms: 4,
      buildingAreaSqm: 210,
      floors: 1,
      parking: 2,
      electricityWatts: 11000,
      furnishing: "Furnished",
      facing: "Utara",
    },
    facilities: [
      "Private Lift Access",
      "Rooftop Helipad Access",
      "Wine Cellar Room",
      "Indoor Heated Pool",
      "Valet Parking 24 Jam",
      "Dedicated Butler Service",
      "Direct Bridge to Pacific Place",
    ],
    description: "Puncak prestise hunian vertikal ibukota dengan akses lift privat dan panorama metropolitan tak terbatas.",
    longDescription: "Sebuah mahakarya tempat tinggal di atas awan. Skyline Penthouse menghadirkan standar kenyamanan tingkat dunia bagi para eksekutif dan keluarga terpilih. Dilengkapi perabot pesanan khusus rancangan desainer ternama, dapur koki gourmet Miele, serta balkon melingkar dengan pemandangan kota Jakarta yang gemerlap.",
    images: [
      { src: "/property-kayu-apartment.jpg", alt: "Ruang utama Penthouse", caption: "Lantai kayu eksotis dan jendela panoramic" },
      { src: "/property-senja-residence.jpg", alt: "Kamar tidur utama", caption: "Master suite dengan view SCBD" },
      { src: "/property-bukit-villa.jpg", alt: "Kamar mandi marmer", caption: "Ensuite bathroom dengan bathtub mewah" },
      { src: "/property-mangrove-house.jpg", alt: "Lobi privat", caption: "Akses lift pribadi langsung ke dalam unit" },
    ],
    agent: mockAgents[0],
  },
  {
    id: "samudra-cliff-villa",
    slug: "samudra-cliff-villa",
    href: "/properties/samudra-cliff-villa",
    title: "Samudra Cliff Villa",
    image: {
      src: "/property-bukit-villa.jpg",
      alt: "Vila mewah di tebing karang Uluwatu dengan infinity pool samudera",
    },
    location: "Uluwatu, Bali",
    address: "Pecatu Indah Resort, Uluwatu, Kuta Selatan, Bali",
    price: { amount: 120000000, currency: "IDR", period: "month" },
    type: "Villa",
    status: "For rent",
    certificate: "Hak Sewa / Leasehold",
    yearBuilt: 2023,
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      buildingAreaSqm: 380,
      landAreaSqm: 600,
      floors: 2,
      parking: 3,
      electricityWatts: 13200,
      furnishing: "Furnished",
      facing: "Barat",
    },
    facilities: [
      "Cliff-edge Infinity Pool",
      "Sunset Viewing Terrace",
      "Media & Cinema Room",
      "Chef Kitchen & BBQ Grill",
      "Staff Quarters Separate",
      "Direct Beach Path Access",
      "High-end Sound System",
    ],
    description: "Vila tebing spektakuler menghadap Samudera Hindia dengan sunset tak tertandingi di Uluwatu.",
    longDescription: "Duduk santai di bibir kolam tanpa batas sambil menyaksikan matahari terbenam ke dalam samudra. Samudra Cliff Villa adalah puncak relaksasi tropis modern. Menawarkan ruang terbuka luar biasa untuk menjamu tamu istimewa, kamar mandi outdoor beraroma spa, dan privasi absolut yang dijaga 24 jam.",
    images: [
      { src: "/property-bukit-villa.jpg", alt: "Infinity pool menghadap samudra", caption: "Kolam renang spektakuler di tepi tebing" },
      { src: "/property-senja-residence.jpg", alt: "Ruang makan tepi tebing", caption: "Dining room semi-terbuka bertabur angin laut" },
      { src: "/property-mangrove-house.jpg", alt: "Balkon lantai dua", caption: "Balkon santai dengan daybed santai" },
      { src: "/property-kayu-apartment.jpg", alt: "Living room luas", caption: "Ruang kumpul mewah dengan sofa empuk" },
    ],
    agent: mockAgents[2],
  },
  {
    id: "pinus-residence",
    slug: "pinus-residence",
    href: "/properties/pinus-residence",
    title: "Pinus Residence",
    image: {
      src: "/property-mangrove-house.jpg",
      alt: "Rumah villa sejuk dikelilingi hutan pinus di Dago Atas Bandung",
    },
    location: "Dago Atas, Bandung",
    address: "Jl. Dago Pakar Permai, Dago Atas, Bandung",
    price: { amount: 2600000000, currency: "IDR" },
    type: "House",
    status: "New listing",
    certificate: "SHM - Sertifikat Hak Milik",
    yearBuilt: 2024,
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      buildingAreaSqm: 195,
      landAreaSqm: 215,
      floors: 2,
      parking: 2,
      electricityWatts: 3500,
      furnishing: "Semi Furnished",
      facing: "Selatan",
    },
    facilities: [
      "Mountain & City Light View",
      "Fireplace Ready",
      "Wood Decking Balcony",
      "Gated Community",
      "Water Filtration System",
      "Dekat Kafe & Resto Dago",
    ],
    description: "Rumah peristirahatan berhawa sejuk pegunungan dengan panorama city light kota Bandung.",
    longDescription: "Terletak di ketinggian Dago Atas dengan temperatur sejuk alami sepanjang tahun. Pinus Residence didesain khusus bagi mereka yang mendambakan udara bersih pegunungan tanpa jauh dari pusat kota Bandung. Mengusung material batu andesit lokal dan kaca lebar untuk menikmati pemandangan perbukitan pinus.",
    images: [
      { src: "/property-mangrove-house.jpg", alt: "Fasad Pinus Residence", caption: "Konsep rumah peristirahatan modern bernuansa hangat" },
      { src: "/property-senja-residence.jpg", alt: "Balkon kayu atas", caption: "Dek kayu santai untuk minum kopi pagi" },
      { src: "/property-arsana-house.jpg", alt: "Ruang makan keluarga", caption: "Ruang makan dengan jendela menghadap bukit" },
      { src: "/property-kayu-apartment.jpg", alt: "Kamar tidur utama", caption: "Kamar tidur bernuansa kayu lembut" },
    ],
    agent: mockAgents[3],
  },
  {
    id: "grand-savanna-land",
    slug: "grand-savanna-land",
    href: "/properties/grand-savanna-land",
    title: "Kavling Grand Savanna",
    image: {
      src: "/property-arsana-house.jpg",
      alt: "Tanah kavling siap bangun dengan lanskap hijau di Sentul City",
    },
    location: "Sentul City, Bogor",
    address: "Cluster Savanna Green, Sentul City, Bogor",
    price: { amount: 1450000000, currency: "IDR" },
    type: "Land",
    status: "For sale",
    certificate: "SHGB Murni (Bisa Peningkatan SHM)",
    specifications: {
      landAreaSqm: 320,
      facing: "Timur",
    },
    facilities: [
      "Jalan Aspal Lebar 10 Meter",
      "Saluran Drainase Bawah Tanah",
      "Jaringan Listrik & Fiber Optic Ready",
      "Security Cluster 24 Jam",
      "Pemandangan Gunung Salak",
      "Bebas Banjir",
    ],
    description: "Kavling sudut siap bangun berlatar pemandangan Gunung Salak di kawasan mandiri Sentul.",
    longDescription: "Peluang emas investasi tanah kavling prestisius di Sentul City. Kontur tanah padat matang siap bangun dengan posisi hook yang memberikan fleksibilitas rancangan arsitektur tanpa batas. Udara bersih bebas polusi, hanya 45 menit dari Jakarta via akses langsung Tol Jagorawi.",
    images: [
      { src: "/property-arsana-house.jpg", alt: "Pemandangan kavling Sentul", caption: "Lahan datar siap bangun dengan jalan cluster lebar" },
      { src: "/property-mangrove-house.jpg", alt: "Pemandangan bukit sekeliling", caption: "Panorama perbukitan hijau asri" },
      { src: "/property-bukit-villa.jpg", alt: "Lingkungan perumahan", caption: "Infrastruktur modern dan kabel bawah tanah" },
    ],
    agent: mockAgents[3],
  },
  {
    id: "metro-suite-studio",
    slug: "metro-suite-studio",
    href: "/properties/metro-suite-studio",
    title: "Metro Suite Sudirman",
    image: {
      src: "/property-kayu-apartment.jpg",
      alt: "Studio apartemen modern praktis terhubung langsung ke MRT Sudirman",
    },
    location: "Sudirman, Jakarta Pusat",
    address: "Jl. Jend. Sudirman Kav. 25, Karet Sudirman, Jakarta Pusat",
    price: { amount: 12000000, currency: "IDR", period: "month" },
    type: "Apartment",
    status: "For rent",
    certificate: "Strata Title (HGB)",
    yearBuilt: 2023,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      buildingAreaSqm: 42,
      floors: 1,
      parking: 1,
      electricityWatts: 2200,
      furnishing: "Furnished",
      facing: "Barat",
    },
    facilities: [
      "Direct Bridge to MRT Station",
      "Gym & Co-working Space",
      "Laundry Room On-site",
      "Minimarket 24 Jam",
      "Smart Access Card",
      "High-speed Wi-Fi Included",
    ],
    description: "Unit studio modern fully furnished dengan integrasi stasiun MRT langsung di koridor Sudirman.",
    longDescription: "Dirancang sempurna bagi profesional muda yang mengutamakan mobilitas dan efisiensi waktu. Unit telah ditata dengan smart furniture hemat ruang, smart TV, kulkas, microwave, dan meja kerja ergonomis. Cukup melangkah beberapa meter untuk menaiki MRT Sudirman menuju pusat bisnis ibukota.",
    images: [
      { src: "/property-kayu-apartment.jpg", alt: "Interior studio modern", caption: "Tata ruang studio efisien dan fungsional" },
      { src: "/property-senja-residence.jpg", alt: "Area tempat tidur", caption: "Queen bed dengan matras hotel bintang lima" },
      { src: "/property-mangrove-house.jpg", alt: "Fasilitas co-working", caption: "Lounge bersama untuk bekerja dan meeting" },
    ],
    agent: mockAgents[0],
  },
  {
    id: "taman-anggrek-loft",
    slug: "taman-anggrek-loft",
    href: "/properties/taman-anggrek-loft",
    title: "Taman Anggrek Loft",
    image: {
      src: "/property-senja-residence.jpg",
      alt: "Apartemen tipe loft bertingkat di Tomang Jakarta Barat",
    },
    location: "Tomang, Jakarta Barat",
    address: "Kawasan Mal Taman Anggrek, Tomang, Jakarta Barat",
    price: { amount: 2100000000, currency: "IDR" },
    type: "Apartment",
    status: "For sale",
    certificate: "Strata Title",
    yearBuilt: 2022,
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      buildingAreaSqm: 110,
      floors: 2,
      parking: 1,
      electricityWatts: 4400,
      furnishing: "Semi Furnished",
      facing: "Utara",
    },
    facilities: [
      "Direct Mall Access",
      "Swimming Pool & Jacuzzi",
      "Tennis & Basketball Court",
      "Jogging Track Podium",
      "Dedicated Parking Lot",
      "Keamanan 24 Jam",
    ],
    description: "Apartemen berkonsep loft dua lantai yang unik dan lapang di atas pusat perbelanjaan Jakarta Barat.",
    longDescription: "Menghadirkan sensasi tinggal di townhouse namun dengan kenyamanan fasilitas apartemen bertingkat tinggi. Desain mezzanine memisahkan area publik di lantai bawah dengan kamar tidur privat di lantai atas. Akses langsung ke mal memudahkan segala kebutuhan belanja, kuliner, dan hiburan keluarga.",
    images: [
      { src: "/property-senja-residence.jpg", alt: "Living room mezzanine loft", caption: "Plafon tinggi 5 meter dengan jendela kaca raksasa" },
      { src: "/property-kayu-apartment.jpg", alt: "Lantai atas kamar tidur", caption: "Area privat di lantai mezzanine" },
      { src: "/property-bukit-villa.jpg", alt: "Kolam renang podium", caption: "Area rekreasi luar ruang yang luas" },
      { src: "/property-arsana-house.jpg", alt: "Dapur bersih", caption: "Pantry bergaya minimalis modern" },
    ],
    agent: mockAgents[1],
  },
];

export const propertyCategories = [
  {
    label: "City homes",
    description: "Thoughtful spaces close to the rhythm of the city.",
    image: "/property-senja-residence.jpg",
    href: "/properties?type=house",
  },
  {
    label: "Apartment living",
    description: "Well-connected addresses with room to settle in.",
    image: "/property-kayu-apartment.jpg",
    href: "/properties?type=apartment",
  },
  {
    label: "Island retreats",
    description: "A slower pace, considered design, and open skies.",
    image: "/property-bukit-villa.jpg",
    href: "/properties?type=villa",
  },
];

export function getPropertyBySlug(slug: string): PropertyDetail | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase();
  return mockProperties.find(
    (p) => p.slug.toLowerCase() === decoded || p.id.toLowerCase() === decoded,
  );
}

export function getRelatedProperties(currentId: string, limit: number = 3): PropertyDetail[] {
  const current = mockProperties.find((p) => p.id === currentId);
  if (!current) {
    return mockProperties.slice(0, limit);
  }

  // Prioritize same type or similar location
  const others = mockProperties.filter((p) => p.id !== currentId);
  const sameType = others.filter((p) => p.type === current.type);
  const remaining = others.filter((p) => p.type !== current.type);

  return [...sameType, ...remaining].slice(0, limit);
}

export function filterProperties(filters: PropertyFilters): {
  properties: PropertyDetail[];
  total: number;
  page: number;
  totalPages: number;
} {
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 6;

  let result = [...mockProperties];

  // Listing type: buy vs rent
  if (filters.listingType === "buy") {
    result = result.filter((p) => p.status !== "For rent" && !p.price.period);
  } else if (filters.listingType === "rent") {
    result = result.filter((p) => p.status === "For rent" || !!p.price.period);
  }

  // Property type: House, Apartment, Villa, Land
  if (filters.type && filters.type !== "all") {
    result = result.filter((p) => p.type.toLowerCase() === filters.type?.toLowerCase());
  }

  // Query / Keyword
  if (filters.query && filters.query.trim() !== "") {
    const q = filters.query.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        (p.address && p.address.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q),
    );
  }

  // Location filter
  if (filters.location && filters.location.trim() !== "") {
    const loc = filters.location.toLowerCase().trim();
    result = result.filter((p) => p.location.toLowerCase().includes(loc));
  }

  // Price range
  if (filters.minPrice !== null && filters.minPrice !== undefined && filters.minPrice > 0) {
    result = result.filter((p) => p.price.amount >= (filters.minPrice ?? 0));
  }
  if (filters.maxPrice !== null && filters.maxPrice !== undefined && filters.maxPrice > 0) {
    result = result.filter((p) => p.price.amount <= (filters.maxPrice ?? Infinity));
  }

  // Bedrooms
  if (filters.minBedrooms !== null && filters.minBedrooms !== undefined && filters.minBedrooms > 0) {
    result = result.filter((p) => (p.specifications?.bedrooms ?? 0) >= (filters.minBedrooms ?? 0));
  }

  // Bathrooms
  if (filters.minBathrooms !== null && filters.minBathrooms !== undefined && filters.minBathrooms > 0) {
    result = result.filter((p) => (p.specifications?.bathrooms ?? 0) >= (filters.minBathrooms ?? 0));
  }

  // Sorting
  if (filters.sort === "price-asc") {
    result.sort((a, b) => a.price.amount - b.price.amount);
  } else if (filters.sort === "price-desc") {
    result.sort((a, b) => b.price.amount - a.price.amount);
  } else if (filters.sort === "popular") {
    result.sort((a, b) => (b.status === "Featured" ? 1 : 0) - (a.status === "Featured" ? 1 : 0));
  } else {
    // Default newest
    result.sort((a, b) => (b.status === "New listing" ? 1 : 0) - (a.status === "New listing" ? 1 : 0));
  }

  const total = result.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const startIndex = (page - 1) * pageSize;
  const paginated = result.slice(startIndex, startIndex + pageSize);

  return {
    properties: paginated,
    total,
    page,
    totalPages,
  };
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase();
  return mockProjects.find(
    (p) => p.slug.toLowerCase() === decoded || p.id.toLowerCase() === decoded,
  );
}

export function getAgentBySlug(slug: string): AgentProfile | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase();
  return mockAgents.find(
    (a) => a.id.toLowerCase() === decoded || a.name.toLowerCase().replace(/\s+/g, '-') === decoded,
  );
}

export const mockArticles: ArticleItem[] = [
  {
    id: "memilih-kawasan-hunian",
    slug: "memilih-kawasan-hunian",
    title: "Menentukan Kawasan yang Tepat untuk Babak Hidup Berikutnya",
    description: "Hal-hal penting yang perlu dipertimbangkan sebelum memilih lokasi hunian, dari infrastruktur hingga potensi nilai jangka panjang.",
    content: [
      "Memilih kawasan hunian bukan sekadar soal harga per meter persegi. Ada banyak faktor yang seringkali luput dari pertimbangan, mulai dari akses transportasi publik, ketersediaan fasilitas kesehatan, hingga rencana pengembangan infrastruktur pemerintah yang bisa meningkatkan nilai properti secara signifikan.",
      "Langkah pertama adalah menentukan prioritas gaya hidup. Apakah Anda membutuhkan kedekatan dengan pusat bisnis? Atau justru mencari ketenangan dengan udara bersih di kawasan sub-urban? Memahami kebutuhan ini akan mempersempit pilihan dan membuat proses pencarian jauh lebih efisien.",
      "Perhatikan juga pola pengembangan kawasan. Daerah yang sedang dalam tahap pembangunan infrastruktur besar — seperti jalur MRT baru, jalan tol, atau pusat komersial — biasanya menawarkan harga masuk yang relatif terjangkau dengan potensi kenaikan nilai yang menarik.",
      "Jangan lupa mengevaluasi lingkungan sosial dan keamanan. Kunjungi kawasan di waktu yang berbeda: pagi hari kerja, sore saat jam pulang, dan malam hari di akhir pekan. Anda akan mendapatkan gambaran nyata tentang ritme kehidupan di sana.",
      "Terakhir, bicara dengan penduduk lokal dan agen properti yang beroperasi di kawasan tersebut. Mereka memiliki wawasan berharga tentang dinamika lingkungan yang tidak bisa Anda temukan di internet.",
    ],
    category: "Panduan",
    image: { src: "/property-senja-residence.jpg", alt: "Perumahan modern di kawasan hijau" },
    author: { name: "Maya Pradana", role: "Senior Property Consultant", initials: "MP" },
    publishedAt: "2026-09-12",
    readingTimeMinutes: 6,
  },
  {
    id: "ruang-yang-baik",
    slug: "ruang-yang-baik",
    title: "Ruang yang Baik Dimulai dari Cara Hidup yang Anda Jalani",
    description: "Membaca kembali kebutuhan rumah di tengah rutinitas yang terus berubah dan cara baru kita bekerja.",
    content: [
      "Cara kita menghuni ruang telah berubah secara mendasar dalam beberapa tahun terakhir. Ruang kerja bercampur dengan ruang keluarga, dapur menjadi area multifungsi, dan balkon berubah menjadi tempat pelarian singkat dari layar monitor.",
      "Saat mencari hunian baru, penting untuk memulai dari pertanyaan: bagaimana hari-hari Anda sesungguhnya berjalan? Bukan tentang berapa kamar tidur yang Anda inginkan, melainkan tentang aktivitas apa yang terjadi di setiap ruang.",
      "Jika Anda bekerja dari rumah tiga hari dalam seminggu, sebuah sudut kerja yang mendapatkan cahaya alami bisa jauh lebih berharga daripada satu kamar tidur ekstra. Jika Anda sering memasak bersama keluarga, dapur terbuka yang terhubung ke ruang makan menjadi elemen krusial.",
      "Konsep 'cukup luas' juga perlu didefinisikan ulang. Rumah yang lebih kecil namun tertata dengan baik — dengan sirkulasi udara yang baik, penyimpanan yang cerdas, dan pencahayaan alami yang optimal — seringkali memberikan kualitas hidup yang lebih tinggi dibandingkan ruang yang besar namun gelap dan pengap.",
      "Pada akhirnya, rumah yang baik adalah rumah yang mendukung ritme hidup penghuninya tanpa menuntut kompromi berlebihan. Dan untuk menemukan ruang seperti itu, langkah pertama adalah memahami dengan jujur bagaimana Anda sebenarnya hidup.",
    ],
    category: "Gaya Hidup",
    image: { src: "/property-kayu-apartment.jpg", alt: "Interior apartemen modern yang terang" },
    author: { name: "Redaksi Eagletree", role: "Tim Editorial", initials: "RE" },
    publishedAt: "2026-09-05",
    readingTimeMinutes: 5,
  },
  {
    id: "peluang-pasar-properti",
    slug: "peluang-pasar-properti",
    title: "Melihat Peluang dari Sudut Pandang yang Lebih Luas",
    description: "Catatan singkat untuk membantu Anda memahami pasar properti Indonesia di kuartal ketiga 2026.",
    content: [
      "Pasar properti Indonesia menunjukkan sinyal pemulihan yang konsisten sepanjang 2026. Indeks Harga Properti Residensial (IHPR) Bank Indonesia mencatat kenaikan moderat di hampir seluruh kota besar, dengan pertumbuhan tertinggi terjadi di koridor-koridor yang dilayani transportasi massal baru.",
      "Segmen menengah-atas — khususnya rumah tapak di kisaran Rp 2-5 miliar — tetap menjadi motor utama penjualan. Pembeli di segmen ini cenderung sudah memiliki properti pertama dan sedang mencari hunian kedua yang lebih sesuai dengan tahap kehidupan mereka saat ini.",
      "Sementara itu, apartemen di koridor Sudirman-Thamrin dan kawasan transit-oriented development (TOD) mulai menunjukkan pemulihan harga setelah koreksi yang terjadi pada tahun-tahun sebelumnya. Ini membuka jendela peluang bagi investor jangka menengah.",
      "Yang menarik, permintaan untuk properti sewa premium di Bali terus meningkat. Vila-vila dengan desain kontemporer dan fasilitas kerja jarak jauh menjadi incaran para digital nomad dan ekspatriat yang berencana menetap lebih lama.",
      "Untuk pembeli yang sedang mempertimbangkan langkah pertama, ini adalah saat yang baik untuk memulai riset serius. Suku bunga KPR masih kompetitif, dan banyak pengembang menawarkan skema pembayaran yang lebih fleksibel dibandingkan tahun-tahun sebelumnya.",
    ],
    category: "Wawasan",
    image: { src: "/property-bukit-villa.jpg", alt: "Pemandangan kawasan properti dari ketinggian" },
    author: { name: "Raka Wijaya", role: "Senior Property Consultant", initials: "RW" },
    publishedAt: "2026-08-28",
    readingTimeMinutes: 7,
  },
  {
    id: "nilai-jangka-panjang-lokasi",
    slug: "nilai-jangka-panjang-lokasi",
    title: "Mengenali Nilai Jangka Panjang dari Sebuah Lokasi",
    description: "Cara membaca potensi kawasan sebelum mengambil keputusan investasi properti.",
    content: [
      "Dalam investasi properti, lokasi bukan sekadar titik koordinat di peta. Lokasi adalah kumpulan faktor yang saling berinteraksi: aksesibilitas, kepadatan penduduk, kualitas infrastruktur, dan — yang seringkali diabaikan — arah kebijakan tata kota.",
      "Salah satu indikator kuat potensi kawasan adalah rencana detail tata ruang (RDTR) yang diterbitkan pemerintah daerah. Dokumen ini memetakan zona pengembangan komersial, residensial, dan hijau dalam kurun waktu 10-20 tahun ke depan. Kawasan yang dialokasikan untuk pengembangan campuran (mixed-use) biasanya memiliki potensi apresiasi yang lebih tinggi.",
      "Perhatikan juga fenomena 'efek riak' dari proyek infrastruktur besar. Pembangunan stasiun MRT atau LRT baru tidak hanya meningkatkan nilai properti di radius 500 meter, tetapi juga mendorong pertumbuhan ekonomi mikro di area yang lebih luas melalui efek multiplier.",
      "Dari sisi praktis, bandingkan harga tanah per meter persegi di kawasan target dengan kawasan sejenis yang sudah lebih berkembang. Selisih harga ini — yang disebut gap pricing — bisa menjadi indikator upside potential yang reasonable.",
      "Penting juga untuk berpikir tentang likuiditas. Kawasan dengan permintaan sewa yang kuat dan akses mudah ke pusat kegiatan akan lebih mudah dijual kembali ketika saatnya tiba. Ini adalah asuransi terbaik dalam investasi properti.",
    ],
    category: "Investasi",
    image: { src: "/property-arsana-house.jpg", alt: "Kawasan perumahan modern dengan infrastruktur baru" },
    author: { name: "Hendra Kusuma", role: "Commercial & Land Advisor", initials: "HK" },
    publishedAt: "2026-08-20",
    readingTimeMinutes: 8,
  },
  {
    id: "rumah-dan-ritme-hidup",
    slug: "rumah-dan-ritme-hidup",
    title: "Ketika Rumah Menjadi Bagian dari Ritme yang Lebih Baik",
    description: "Cerita tentang ruang, cahaya, dan kehidupan sehari-hari yang dimulai dari memilih tempat tinggal dengan lebih sadar.",
    content: [
      "Ada momen ketika Anda berhenti sejenak di ambang pintu, menikmati cahaya pagi yang masuk dari jendela timur, dan menyadari bahwa rumah ini bukan hanya tempat Anda tidur. Rumah ini adalah bagian dari ritme yang Anda ciptakan.",
      "Nadia dan Reza merasakan hal itu ketika mereka pindah ke rumah baru mereka di Bintaro. Setelah bertahun-tahun menyewa apartemen di pusat kota, mereka memutuskan bahwa anak-anak mereka membutuhkan halaman, dan mereka sendiri membutuhkan ruang untuk bernapas.",
      "Proses pencariannya tidak instan. Mereka menghabiskan empat bulan menjelajahi berbagai kawasan, berbicara dengan konsultan properti Eagletree, dan mempersempit pilihan mereka dari belasan menjadi tiga. Yang menarik, rumah yang akhirnya mereka pilih bukan yang paling besar atau paling mahal.",
      "\"Yang membuat kami jatuh hati adalah cara cahaya masuk ke ruang keluarga di sore hari,\" kenang Nadia. \"Dan ketika kami membuka jendela dapur, angin dari taman belakang langsung masuk. Rasanya seperti rumah ini bernapas bersama kami.\"",
      "Cerita mereka mengingatkan kita bahwa memilih rumah pada akhirnya adalah memilih bagaimana Anda ingin menjalani hari-hari Anda. Bukan soal luas bangunan atau jumlah kamar, melainkan soal bagaimana sebuah ruang membuat Anda merasa di tempat yang tepat.",
    ],
    category: "Inspirasi",
    image: { src: "/property-mangrove-house.jpg", alt: "Rumah dengan taman hijau di pagi hari" },
    author: { name: "Redaksi Eagletree", role: "Tim Editorial", initials: "RE" },
    publishedAt: "2026-08-14",
    readingTimeMinutes: 5,
  },
  {
    id: "tips-negosiasi-harga-properti",
    slug: "tips-negosiasi-harga-properti",
    title: "5 Strategi Negosiasi Harga Properti yang Profesional dan Efektif",
    description: "Panduan langkah demi langkah agar Anda mendapatkan harga terbaik tanpa merusak hubungan dengan penjual.",
    content: [
      "Negosiasi harga adalah bagian natural dari transaksi properti. Namun, banyak pembeli merasa canggung atau tidak percaya diri saat bernegosiasi. Kunci utamanya adalah mempersiapkan diri dengan data dan menjalankan prosesnya dengan sikap yang profesional.",
      "Strategi pertama: riset harga pasar secara menyeluruh. Bandingkan harga properti serupa di kawasan yang sama dalam 6-12 bulan terakhir. Ini memberikan Anda fondasi argumen yang kuat dan menunjukkan kepada penjual bahwa Anda adalah pembeli serius yang sudah memahami pasar.",
      "Strategi kedua: kenali motivasi penjual. Apakah mereka sedang terburu-buru menjual? Atau mereka fleksibel soal waktu? Penjual yang membutuhkan likuiditas cepat cenderung lebih terbuka terhadap negosiasi harga, sementara penjual yang tidak terburu-buru mungkin lebih responsif terhadap negosiasi terms — seperti jadwal serah terima atau kelengkapan furnitur.",
      "Strategi ketiga: gunakan temuan inspeksi sebagai leverage yang adil. Jika dari hasil pemeriksaan fisik ditemukan hal-hal yang perlu diperbaiki — atap bocor, instalasi listrik lama, atau dinding retak — ini menjadi dasar yang wajar untuk meminta penyesuaian harga.",
      "Strategi keempat: jangan pernah memberikan penawaran tanpa batas atas. Tentukan budget maksimum Anda sebelum memulai dan bersikaplah tegas. Terkadang, kesediaan untuk walk away justru membawa Anda mendapatkan penawaran terbaik.",
    ],
    category: "Panduan",
    image: { src: "/property-senja-residence.jpg", alt: "Properti yang sedang dalam proses negosiasi" },
    author: { name: "Sari Utama", role: "Luxury Villa Specialist", initials: "SU" },
    publishedAt: "2026-08-07",
    readingTimeMinutes: 6,
  },
];

export const articleCategories: ArticleCategory[] = [
  "Panduan",
  "Gaya Hidup",
  "Wawasan",
  "Investasi",
  "Inspirasi",
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase();
  return mockArticles.find(
    (a) => a.slug.toLowerCase() === decoded || a.id.toLowerCase() === decoded,
  );
}

export function getRelatedArticles(currentId: string, limit: number = 3): ArticleItem[] {
  const current = mockArticles.find((a) => a.id === currentId);
  if (!current) return mockArticles.slice(0, limit);

  const sameCategory = mockArticles.filter(
    (a) => a.id !== currentId && a.category === current.category,
  );
  const others = mockArticles.filter(
    (a) => a.id !== currentId && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function filterArticles(category?: ArticleCategory | "all"): ArticleItem[] {
  if (!category || category === "all") return mockArticles;
  return mockArticles.filter((a) => a.category === category);
}
