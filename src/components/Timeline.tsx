import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ZestGeek Solution Pvt Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Mohali, Punjab</h4>
            <p>
              UI Developer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apps Techy Pvt Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Mohali Punjab</h4>
            <p>
              Web Designer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Hubprotect Pvt Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Mohali Punjab</h4>
            <p>
              Web Designer
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;