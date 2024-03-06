import React from 'react';
import CommonHeader from '../components/CommonHeader/CommonHeader';
import SearchResultsPage from '../pages/SearchResultsPage/SearchResultsPage';
import './StandardLayout.css';

type StandardLayoutProps = {
  HeaderContent?: React.ReactNode;
  MainContent?: React.ReactNode;
}

const StandardLayout = ({ HeaderContent, MainContent }: StandardLayoutProps) => {
  return (
    <div className="standardlayout">
      <header>{HeaderContent || <CommonHeader />}</header>
      <main>{MainContent || <SearchResultsPage />}</main>
    </div>
  );
};


export default StandardLayout;
