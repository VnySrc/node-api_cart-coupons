import { Coupon } from "../models/Coupon";

export const CouponServices = {
    getAllProductsService: async () => {
        const response = await Coupon.findAll()
        return response
    },
    addCouponService : async ( tag, discount, type) => {
        try {
            const response = Coupon.build({
                tag,
                discount,
                 type
            })
            await response.save()
            return response
        }
        catch (err) {
            return err
        }
       
    },
    findOneCouponByTagService: async (tag) => {
        const response = await Coupon.findAll({where: {tag: tag}})
        if ( response ) {
            return response
        }
        else {
            return new Error ("invalid coupon tag")
        }    
    },
    editCouponService: async (tag, discount?, type?) => {
        const response = await Coupon.findByPk(tag)
        if (response) {
            discount? response.discount = discount :  response.discount
            type? response.type = type : response.type
            return response
        }
        else {
            return new Error ("invalid coupon tag")
        }
        
        
    },
    deleteCouponService: async (tag) => {
        const response = await Coupon.findByPk(tag)
        if (response) {
            await response.destroy()
            return `coupon tag:${tag} deleted`
        }
        else {
            return new Error ("invalid coupon tag")
        }     
    }
}