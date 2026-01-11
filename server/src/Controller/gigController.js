import Gig from '../models/Gig.js'

export const createGig = async (req,res)=>{
  try {
    const {title,description,budget}=req.body;

    if(!title || !description || !budget){
      return res.status(400).json({status:true,message:"All fields required"})=req.body;
    }

    const gig = await Gig.create({
      title,
      description,
      budget,
      ownerId:req.user._id
    });

    res.status(201).json({
      success:true,
      message:"Gig created successfully",
      gig
    });
  } catch (error) {
    res.status(500).json({success:false,message:"Internal server error"})
  }
}

export const  getOpenGigs = async(req,res)=>{
  try {
    const {search} = req.query;

    const query= {
      status:"open"
    }

    if(search){
      query.title= {$regex: search, $options:"i"}
    }

    const gigs = await Gig.find(query)
    .populate("ownedId","name email")
    .sort({createdAt:-1})

    res.json(gigs);
  } catch (error) {
    res.status(500).json({success:false,message:"Internal server error"})
  }
}