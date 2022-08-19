import React from 'react'
import "./feacturedInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'


const FeacturedInfo = () => {
    return (
        <div className='feactured'>
            <div className="feacturedItem">
                <span className="feacturedTitle">Revanue</span>
                <div className="feacturedMoneyContainrr">
                    <span className="feacturedMoney">$2,415</span>
                    <span className="feacturedMoneyRate">-11.4 <ArrowDownward className='feacturedIcon negetive'/></span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>

            <div className="feacturedItem">
                <span className="feacturedTitle">Sales</span>
                <div className="feacturedMoneyContainrr">
                    <span className="feacturedMoney">$4,415</span>
                    <span className="feacturedMoneyRate">-1.4 <ArrowDownward className='feacturedIcon negetive' /></span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>

            <div className="feacturedItem">
                <span className="feacturedTitle">Cost</span>
                <div className="feacturedMoneyContainrr">
                    <span className="feacturedMoney">$5,415</span>
                    <span className="feacturedMoneyRate">+5.4 <ArrowUpward className='feacturedIcon '/></span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>
        </div>
    )
}

export default FeacturedInfo
