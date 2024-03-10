import Link from "next/link";
import React from "react";

const AdsCategory = () => {
  return (
    <div className="flex justify-start gap-5 px-16 mt-5 p-5">
      {/* First Column */}
      <div className="mb-5">
        <div className="font-bold mb-2">Vehicle Ads</div>
        <ul>
          <li>
            <Link href="/gari-list" className="mb-2">
              Cars in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Trucks in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Vans in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Bikes in Bangladesh
            </Link>
          </li>
        </ul>
      </div>

      {/* Second Column */}
      <div className="">
        <div className="font-bold mb-2">Trending Ads</div>
        <ul>
          <li>
            <Link href="/gari-list" className="mb-2">
              Cars in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Trucks in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Vans in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Bikes in Bangladesh
            </Link>
          </li>
        </ul>
      </div>

      {/* Third Column */}
      <div className="">
        <div className="font-bold mb-2">Property Ads</div>
        <ul>
          <li>
            <Link href="/gari-list" className="mb-2">
              Cars in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Trucks in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Vans in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Bikes in Bangladesh
            </Link>
          </li>
        </ul>
      </div>

      {/* Fourth Column */}
      <div className="">
        <div className="font-bold mb-2">Latest Ads</div>
        <ul>
          <li>
            <Link href="/gari-list" className="mb-2">
              Cars in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Trucks in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Vans in Bangladesh
            </Link>
          </li>
          <li>
            <Link href="/gari-list" className="mb-2">
              Bikes in Bangladesh
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdsCategory;
