export interface IntroData {
    imgUrl: string;
    title: string;
    slogan: string;
    desc: string;
}

export interface VideoIntroData {
    imgUrl: string;
    question: string;
    slogan: string;
    desc: string;
    videoUrl: string;
    videoImgUrl: string;
}

export interface ReviewsData{
    yelpCodeSnippet: string;
    facebookCodeSnippet: string;
}

export interface ServiceData {
   id: number;
   name: string;
   htmlTitle: string;
   descUrl: string;
   imgUrl: string;
   category: number[];
}

export interface GalleryImgData{
    imgUrl: string;
    desc: string;
}

export interface TeamData{
    firstName: string;    
    lastName: string;    
    title: string;    
    jobDesc: string;    
    photoUrl: string;
}