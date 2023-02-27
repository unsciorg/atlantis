import { SafetyCertificateOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'umi';

interface CaptchaInputValue {
  captchaCode?: string;
  captchaKey?: string;
}

interface CaptchaInputProps {
  value?: CaptchaInputValue;
  onChange?: (value: CaptchaInputValue) => void;
}

/**
 * 获取验证码
 */
const getCaptcha = async () => {
  try {
    const imageData = {
      image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    };
    // const data = await request('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg');
    return imageData;
  } catch (error) {
    message.error('验证码加载失败,请重试');
    return 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  }
  message.error('验证码加载失败,请重试');
  return 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
};

const CaptchaInput: React.FC<CaptchaInputProps> = ({ value = {}, onChange }) => {
  const intl = useIntl();
  const [captchaCode, setCaptchaCode] = useState<string>('');
  const [captchaKey, setCaptchaKey] = useState<string>('');
  const [imageData, setImageData] = useState<string>('');

  // 触发改变
  const triggerChange = (changedValue: { captchaCode?: string; captchaKey?: string }) => {
    if (onChange) {
      onChange({ captchaCode, captchaKey, ...value, ...changedValue });
    }
  };

  useEffect(() => {
    getCaptcha().then((data: any) => {
      setCaptchaKey(data.captchaKey);
      setImageData(data.image);
      triggerChange({ captchaKey: data.captchaKey });
    });
  }, []);

  // 输入框变化
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value || '';
    if (!isEmpty(code)) {
      setCaptchaCode(code);
    }
    triggerChange({ captchaCode: code });
  };

  // 时间类型变化
  const onClickImage = () => {
    getCaptcha().then((data: any) => {
      setCaptchaKey(data.captchaKey);
      setImageData(data.image);
      triggerChange({ captchaKey: data.captchaKey });
    });
  };

  return (
    <span>
      <Input.Group compact>
        <Input
          prefix={<SafetyCertificateOutlined style={{ color: '#319cff' }} />}
          placeholder={intl.formatMessage({
            id: 'pages.login.captcha.placeholder',
            defaultMessage: '请输入验证码',
          })}
          onChange={onChangeInput}
          style={{
            width: '75%',
            marginRight: 5,
            padding: '6.5px 11px 6.5px 11px',
            verticalAlign: 'middle',
          }}
        />
        <img
          style={{
            width: '23%',
            height: '35px',
            verticalAlign: 'middle',
            padding: '0px 0px 0px 0px',
          }}
          src={imageData}
          onClick={onClickImage}
        />
      </Input.Group>
    </span>
  );
};
export default CaptchaInput;
