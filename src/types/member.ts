export type Member = {
  id: string
  dateOfBirth: string
  imageUrl: string
  displetName: string
  created: string
  lastActive: string
  gender: string
  description: string
  city: string
  country: string
  photos: any[]
}

export type Photo = {
  id:number
  url:string
  publicId?:string
  memberId:string
}
