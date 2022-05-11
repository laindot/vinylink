import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, connect, useSelector } from 'react-redux';
import OrderItem from '../../components/order-item';
import { orderAction } from '../../store/actions';
import { styles } from './styles';
import { COLORS } from '../../constants';

const Order = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
    dispatch(orderAction.getOrders(userId));
  }, []);

  const onDelete = (Id) => {
    dispatch(orderAction.removeOrder(Id));
  };

  const renderItem = ({ item }) => (
    <OrderItem data={item} onDelete={onDelete} />
  );

  return (
    <>
      {orders.items ? (
        <View style={styles.container}>
          <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={(item) => item.Id.toString()}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: COLORS.backgroundColor,
          }}
        >
          <Text style={styles.empty}>No Orders Found</Text>
        </View>
      )}
    </>
  );
};

export default connect()(Order);
