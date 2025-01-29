
import React from "react";

const Tips = (props) => {
	return (
		<div className="tips-container">
			<div className="tip">
				<span className="tip-icon">
					<i class="fa-solid fa-lightbulb"></i>
				</span>

				<p className="tip-text">{props.tip}</p>
			</div>
		</div>
	);
}

export default Tips;