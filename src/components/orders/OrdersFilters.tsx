
import React from 'react';
import { Dealer } from '@/types';
import FilterBar from './filters/FilterBar';
import FilterCard from './filters/FilterCard';

interface OrdersFiltersProps {
  isAdmin: boolean;
  filters: {
    isLicensable: boolean | null;
    hasProforma: boolean | null;
    isPaid: boolean | null;
    isInvoiced: boolean | null;
    hasConformity: boolean | null;
    dealerId: string | null;
    model: string | null;
  };
  updateFilter: (key: string, value: boolean | null | string) => void;
  resetFilters: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  activeFiltersCount: number;
  dealersData: Dealer[];
  uniqueModels: string[];
  onRefresh: () => void;
}

const OrdersFilters = ({
  isAdmin,
  filters,
  updateFilter,
  resetFilters,
  showFilters,
  setShowFilters,
  activeFiltersCount,
  dealersData,
  uniqueModels,
  onRefresh
}: OrdersFiltersProps) => {
  if (!isAdmin) return null;

  return (
    <div>
      <FilterBar 
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        activeFiltersCount={activeFiltersCount}
        onRefresh={onRefresh}
      />
      
      {showFilters && (
        <FilterCard
          filters={filters}
          updateFilter={updateFilter}
          resetFilters={resetFilters}
          setShowFilters={setShowFilters}
          activeFiltersCount={activeFiltersCount}
          dealersData={dealersData}
          uniqueModels={uniqueModels}
        />
      )}
    </div>
  );
};

export default OrdersFilters;
