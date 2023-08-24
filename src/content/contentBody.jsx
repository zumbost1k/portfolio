import React from 'react';
import './contentBody.css'
import { useSelector } from 'react-redux';
import { allProjectsList } from '@/store/selectors';
import { Link } from 'react-router-dom';

const tableInfo = [
    {
        header: true,
        text: '',
        key: 'projectName'
    },
    {
        header: false,
        text: 'Project type',
        key: 'type'
    },
    {
        header: false,
        text: 'Supported resolutions',
        key: 'displayResolution'
    },
    {
        header: false,
        text: 'Tools used',
        key: 'instruments'
    },
    {
        header: false,
        text: 'Development time',
        key: 'developmentPeriod'
    },
    {
        header: false,
        text: 'Project impressions',
        key: 'personalFeedback'
    },
]

const Content = () => {
    const allProjects = useSelector(allProjectsList)
    return (
        <section className='content_section'>
            <div>

                {
                    allProjects.map(currentProject => {
                        return (
                            <div key={currentProject.projectId} className='current_project'>
                                <h2 className='project_name'>{currentProject.projectName}</h2>
                                <table className='project_table'>

                                    {
                                        tableInfo.map(tableItem => {
                                            if (tableItem.header) {
                                                return (
                                                    <thead key={`${tableItem.key}_${currentProject.projectKey}`}>
                                                        <tr >
                                                            <th className='project_table_header' ></th>
                                                            <th className='project_table_item' ></th>
                                                        </tr>
                                                    </thead>

                                                )
                                            }
                                            else {
                                                return (
                                                    <tbody key={`${tableItem.key}_${currentProject.projectKey}`}>
                                                        <tr >
                                                            <td><p className='project_item_first'>{tableItem.text}</p></td>
                                                            <td className='project_item_second'>{currentProject[tableItem.key]}</td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            }
                                        })
                                    }
                                    <tbody key={`${currentProject.projectKey}`}>
                                        <tr >
                                            <td><p className='project_item_first'>Project links</p></td>
                                            <td className='project_item_second'>
                                                <p><Link className='project_link' to={currentProject.projectLink}>Link </Link>to the finalized project</p>
                                                <p><Link className='project_link' to={currentProject.gitProjectLink}>Link</Link> to the project's github</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default Content