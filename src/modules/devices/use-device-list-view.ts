import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { devicesSelector } from 'storage/slices/devices/selectors';
import { getDeviceListRoutine } from 'storage/slices/devices/actions';

export const useDeviceListView = () => {
  const { data, error, isLoading } = useSelector(devicesSelector);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeviceListRoutine())
  }, [dispatch]);
  
  return { data, error, loading: isLoading, filter, setFilter };
};
