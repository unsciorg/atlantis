import { fetchAnouncement } from '@/services/dashboard/api';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Card, Carousel, List, Progress, Skeleton, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

const contentStyle: React.CSSProperties = {
  height: '250px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

const carouselStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const Dashboard: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<DashboardAPI.Announcement[]>([]);

  useEffect(() => {
    const fetchAnouncementData = async () => {
      const res = await fetchAnouncement();
      setItems(res.data);
      setLoading(false);
    };
    fetchAnouncementData();
  }, []);

  const carouselItems = items.map((item) => (
    <div key={item.id}>
      <h3 style={contentStyle}>{item.title}</h3>
    </div>
  ));

  return (
    <PageContainer>
      <Skeleton active loading={isLoading} paragraph={{ rows: 5 }} key={''}>
        <Carousel autoplay style={carouselStyle}>
          {carouselItems}
        </Carousel>
      </Skeleton>
      <Card
        style={{
          borderRadius: 8,
          marginBottom: 10,
          marginTop: 10,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
        title={<FormattedMessage id="pages.dashboard.title" />}
        // type='inner'
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            套餐1
          </div>
          <div
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 10,
              marginBottom: 10,
              width: '65%',
            }}
          >
            <FormattedMessage id="pages.dashboard.subscribe.description" />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 10,
              marginBottom: 10,
              width: '65%',
            }}
          >
            <Progress
              showInfo={false}
              percent={18.9}
              strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 10,
              marginBottom: 10,
              width: '65%',
            }}
          >
            <FormattedMessage id="pages.dashboard.subscribe.used" />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Button type="primary">
              <FormattedMessage id={'pages.dashboard.subscribe.resetBtn'} />
            </Button>
          </div>
        </div>
      </Card>

      {/* 捷径 */}
      <Card
        style={{
          borderRadius: 8,
          marginTop: 10,
          marginBottom: 10,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
        title={<FormattedMessage id="pages.dashboard.shortcut.title" />}
        // type='inner'
      >
        {/* <Card.Grid style={gridStyle}>
          ItemContent
        </Card.Grid> */}
        <List itemLayout="horizontal" size="large">
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{'1223123123'}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </List>
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
