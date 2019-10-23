//my nutrient facts box

import React from "react";
import "./styles/FoodieFacts.css";

class FoodieFacts extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
            <div id="nutritionfacts">
        <table width="242" cellSpacing="0" cellPadding="0">
            <tbody><tr>
                <td align="center" className="header">Nutrition Facts</td>
            </tr>
            <tr>
                <td><div className="serving"> Serving Size: 1</div></td>
            </tr>
            <tr style={{"Height": "7px"}}>
                <td bgcolor="#000000"></td>
            </tr>
            <tr>
                <td style={{"FontSize": "7pt"}}><div className="line">Amount Per Serving</div></td>
            </tr>
            <tr>
                <td>
                    <div className="line">
                    <div className="label">Calories <div className="weight">{this.props.result.Calories}</div></div><div style={{"PaddingTop": "1px", "Float": "Right"}} className="labellight">Calories from Fat <div className="weight">56</div></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td><div className="line"><div className="dvlabel">% Daily Value<sup>*</sup></div></div></td>
            </tr>
            <tr>
                <td>
                    <div className="line">
                    <div className="label">Total Fat <div className="weight">{this.props.result.TotalFat}</div></div>
                    <div className="dv"></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight">Saturated Fat <div className="weight">{this.props.result.SaturatedFat}</div></div>
                    <div className="dv"></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight"><i>Trans</i> Fat <div className="weight">{this.props.result.TransFat}</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Cholesterol <div className="weight">{this.props.result.Cholesterol}</div></div>
                    <div className="dv"></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Sodium <div className="weight">{this.props.result.Sodium}</div></div>
                    <div className="dv"></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Total Carbohydrates <div className="weight">{this.props.result.TotalCarbs}</div></div>
                    <div className="dv"></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight">Dietary Fiber <div className="weight">{this.props.result.DietaryFiber}</div></div>
                    <div className="dv"></div>
                </div></td>
            </tr>
                        <tr>
                <td className="indent">
                    <div className="line">
                    <div className="labellight">Sugars <div className="weight">{this.props.result.Sugar}</div></div>
                    </div>
                </td>
            </tr>
                        <tr>
                <td>
                    <div className="line">
                    <div className="label">Protein <div className="weight">{this.props.result.Protein}</div>
                    </div>
                </div></td>
            </tr>
            <tr style={{"height": "7px"}}>
                <td bgcolor="#000000"></td>
            </tr>
                        <tr>
                <td>
                    <table cellSpacing="0" cellPadding="0" border="0" className="vitamins">
                    <tbody>
                    <tr>
                        <td>Vitamin A &nbsp;&nbsp; </td>
                        <td align="center">•</td>
                        <td align="right">Calcium &nbsp;&nbsp; </td>
                    </tr>
                    <tr>
                        <td>Vitamin B &nbsp;&nbsp; </td>
                        <td align="center">•</td>
                        <td align="right">Iron &nbsp;&nbsp; </td>
                    </tr>
                    <tr>
                        <td>Vitamin C &nbsp;&nbsp; </td>
                        <td align="center">•</td>
                        <td align="right">Potassium &nbsp;&nbsp; </td>
                    </tr>
                    <tr>
                        <td>Vitamin D &nbsp;&nbsp; </td>
                        <td align="center">•</td>
                        <td align="right">Folate &nbsp;&nbsp; </td>
                    </tr>                        
                    </tbody></table>
                </td>
            </tr>
                        <tr>
                <td><div className="line">
                <div className="labellight">* Based on a regular <p>2000 calorie diet</p>
                <br></br><i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                </div>
                </div>
                </td>
            </tr>
        </tbody></table>
    </div>

      </div>
      // <div classNameName="foodiePad">
      //   <section classNameName="performance-facts">
      //     <header classNameName="performance-facts__header">
      //       <h1 classNameName="performance-facts__title">
      //         {this.props.result.FoodieFacts}
      //       </h1>
      //       <p>Serving Size 1 </p>
      //     </header>
      //     <table classNameName="performance-facts__table">
      //       <th colSpan="3" classNameName="small-info" />
      //       <tbody>
      //         <th colSpan="2">
      //           <b>Calories</b>
      //         </th>
      //         <b>{this.props.result.Calories}</b>
      //         <tr>
      //           <th colSpan="2">
      //             <b>Total Fat</b>
      //           </th>
      //           <td>
      //             <b>{this.props.result.TotalFat}</b>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td classNameName="blank-cell"></td>
      //           <th>Saturated Fat</th>

      //           <b>{this.props.result.SaturatedFat}</b>
      //         </tr>
      //         <tr>
      //           <td classNameName="blank-cell"></td>
      //           <th>Trans Fat</th>
      //           <b>{this.props.result.TransFat}</b>
      //           <td></td>
      //         </tr>
      //         <tr>
      //           <th colSpan="2">
      //             <b>Cholesterol</b>
      //           </th>
      //           <td>
      //             <b>{this.props.result.Cholesterol}</b>
      //           </td>
      //         </tr>
      //         <tr>
      //           <th colSpan="2">
      //             <b>Sodium</b>
      //           </th>
      //           <td>
      //             <b>{this.props.result.Sodium}</b>
      //           </td>
      //         </tr>
      //         <tr>
      //           <th colSpan="2">
      //             <b>Total Carbohydrate</b>
      //           </th>
      //           <td>
      //             <b>{this.props.result.TotalCarbs}</b>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td classNameName="blank-cell"></td>
      //           <th>Dietary Fiber</th>
      //           <td>
      //             <b>{this.props.result.DietaryFiber}</b>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td classNameName="blank-cell"></td>
      //           <th>Sugars</th>
      //           <b>{this.props.result.Sugar}</b>
      //           <td></td>
      //         </tr>
      //         <tr classNameName="thick-end">
      //           <th colSpan="2">
      //             <b>Protein</b>
      //           </th>
      //           <b>{this.props.result.Protein}</b>
      //           <td></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </section>
      // </div>
    );
  }
}
export default FoodieFacts;
