import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  // The content of the table/pop-up differs based on the dataset we're
  // displaying information on. We have a good amount of information
  // for the budgetfacilities layer, and less for the streets and
  // ramps pieces.
  if (props.dataset == 'budgetFacilities') {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          background: 'white',
          visibility: props.visible ? 'visible' : 'hidden',
          width: '100%',
          minHeight: '40%',
        }}
      >
        <div className="mb-3">
          <ul className="dl">
            <li className="dl-i">
              <h4 className="text-uppercase font-weight-bold mb-1 mt-2">
                {props.properties['Project_Title']}
              </h4>
            </li>
            <p className="cd-d">{props.properties['Project_Description']}</p>
          </ul>
          <ul className="dl dl--sm">
            <li className="dl-i">
              <span className="dl-d">Status:</span>
              <span className="dl-t">{props.properties['Publish_Status']}</span>
            </li>
            <li className="dl-i">
              <span className="dl-d">Total Budget:</span>
              <span className="dl-t">{`$${
                props.properties['Total_Budget']
              }`}</span>
            </li>
            <li className="dl-i">
              <span className="dl-d">Location:</span>
              <span className="dl-t">{props.properties['Location']}</span>
            </li>
            <li className="dl-i">
              <span className="dl-d">Department:</span>
              <span className="dl-t">{props.properties['Department']}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.dataset == 'publicWorksRamps') {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          background: 'white',
          visibility: props.visible ? 'visible' : 'hidden',
          width: '100%',
          minHeight: '40%',
        }}
      >
        <div>
          <ul className="dl">
            <li className="dl-i">
              <h4 className="text-uppercase font-weight-bold mb-1 mt-2">
                Pedestrian Ramp - {props.properties['Street']}
              </h4>
            </li>
            <p className="cd-d">
              Every pedestrian ramp the Public Works Department replaces meets{' '}
              <a href="https://www.ada.gov/">
                Americans with Disabilities Act standards.
              </a>
            </p>
            <p className="cd-d">
              To replace a ramp, you need to dig out where the old ramp was and
              level the area. The ramp is made by using boards and concrete, and
              the concrete is brushed to create a nonstick surface.
            </p>
            <p className="cd-d">
              Learn more about our{' '}
              <a href="https://www.boston.gov/departments/public-works/roadway-resurfacing-boston#ramp-replacement">
                ramp replacement program.
              </a>{' '}
              View our{' '}
              <a href="https://data.boston.gov/dataset/pedestrian-ramp-inventory">
                inventory of pedestiran ramps.
              </a>
            </p>
          </ul>
        </div>
      </div>
    );
  } else if (props.dataset == 'pwdStreets') {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          background: 'white',
          visibility: props.visible ? 'visible' : 'hidden',
          width: '100%',
          minHeight: '40%',
        }}
      >
        <div>
          <ul className="dl">
            <li className="dl-i">
              <h4 className="text-uppercase font-weight-bold mb-1 mt-2">
                {props.properties['Type']} - {props.properties['STREETNAME']}
              </h4>
            </li>
            <p className="cd-d">
              {props.properties['Description']}{' '}
              {props.properties.URL ? (
                <a href={props.properties.URL}>More information.</a>
              ) : null}
            </p>
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Table.propTypes = {
  dataset: PropTypes.string,
  properties: PropTypes.array,
  visible: PropTypes.boolean,
};
