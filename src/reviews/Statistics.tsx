import React from 'react'
import styled from 'styled'
import { Table } from 'antd'
import { Tag } from '~/ui-components'

const Statistic = styled.span`
  font-size: 1rem;
`
const Value = styled.span`
  font-weight: 600;
  font-size: 1rem;
`

const Container = styled.div`
  margin-bottom: 24px;
  font-size: 1rem;
`

const columns = [
  {
    title: 'Statistic',
    dataIndex: 'name',
    key: 'name',
    render: (value: any) => <Statistic>{value}</Statistic>,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    render: (value: any) => <Value>{value}</Value>,
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
    render: (tag: any) => (
      <Tag icon={tag.icon} type={tag.type}>
        {tag.label}
      </Tag>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'Win ratio',
    value: '93.67%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '2',
    name: 'Avg. return of a winning investment',
    value: '+102.37%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'Avg. loss of a losing investment',
    value: '-16.47%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Good',
    },
  },
  {
    key: '3',
    name: 'Gain-to-Pain Ratio',
    value: '2.39697',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'Sortino Ratio',
    value: '7.532204',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'IRR Geometric Mean',
    value: '+48.66%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'IRR Arithmetic Mean',
    value: '+108.01%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'CAGR since 1970',
    value: '+34.14%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'CAGR since 1990',
    value: '+38.04% ',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'CAGR since 2009',
    value: '+43.72% ',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'Max Drawdown 36 months',
    value: '-22.97%',
    tag: {
      type: 'neutral',
      icon: '😐',
      label: 'Acceptable',
    },
  },
  {
    key: '3',
    name: 'Max Drawdown 50 years',
    value: '-47.85%',
    tag: {
      type: 'worst',
      icon: '👎',
      label: 'High max drawdown',
    },
  },
  {
    key: '3',
    name: 'Percent of years outperforming the S&P500',
    value: '89%',
    tag: {
      type: 'excellent',
      icon: '👍',
      label: 'Excellent',
    },
  },
  {
    key: '3',
    name: 'Average holding period',
    value: '408 days',
    tag: {
      type: 'neutral',
      icon: '📆',
      label: 'Reasonable',
    },
  },
]

// TODO at links to Investopedia.

const Statistics = () => (
  <Container>
    <Table columns={columns} dataSource={data} pagination={false} />
  </Container>
)

export default Statistics
