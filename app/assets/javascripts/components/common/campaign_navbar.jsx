import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CourseUtils from '../../utils/course_utils';

const CampaignNavbar = ({ campaign }) => {
  return (
    <div className="campaign-nav__wrapper">
      <div className="campaign_navigation">
        <div className="container">
          <a className="nav__item">
            <h2 className="title">{I18n.t('campaign.campaign')}: {campaign.title}</h2>
          </a>
          <nav>
            <div className="nav__item" id="overview-link">
              <p><NavLink to={`/campaigns/${campaign.slug}/overview`} >{I18n.t('courses.overview')}</NavLink>
              </p>
            </div>
            <div className="nav__item">
              <p>
                <NavLink to={`/campaigns/${campaign.slug}/programs`}>{CourseUtils.i18n('courses', campaign.course_string_prefix)}</NavLink>
              </p>
            </div>
            <div className="nav__item" id="articles-link">
              <p>
                <NavLink to={`/campaigns/${campaign.slug}/articles`}>{I18n.t('courses.articles')}</NavLink>
              </p>
            </div>
            <div className="nav__item">
              <p>
                <NavLink to={`/campaigns/${campaign.slug}/users`}>{CourseUtils.i18n('students', campaign.course_string_prefix)}</NavLink>
              </p>
            </div>
            <div className="nav__item">
              <p><NavLink to={`/campaigns/${campaign.slug}/ores_plot`}>{I18n.t('courses.ores_plot')}</NavLink></p>
            </div>
            <div className="nav__item">
              <p><NavLink to={`/campaigns/${campaign.slug}/alerts`}>{I18n.t('courses.alerts')}</NavLink></p>
            </div>
            <div className="campaign-nav__search" >
              <form action={`/campaigns/${campaign.slug}/programs`} acceptCharset="UTF-8" method="get">
                <input
                  type="text"
                  name="courses_query"
                  id="coureses_query"
                  placeholder={`${I18n.t('campaign.search')} ${campaign.title}`}
                />
                <button type="submit">
                  <i className="icon icon-search" />
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

CampaignNavbar.propTypes = {
  campaign: PropTypes.object,
};

export default CampaignNavbar;
